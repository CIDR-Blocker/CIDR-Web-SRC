import process from 'webpack-worker/process'
import Papa from 'papaparse'
import JSZip from 'jszip'
import _ from 'lodash'

process((params, emit) => {
  const zip = new JSZip()
  const countryBlocksZip = 'GeoLite2-Country-CSV_20171003/GeoLite2-Country-Blocks-IPv4.csv'
  const countryLocationsZip = 'GeoLite2-Country-CSV_20171003/GeoLite2-Country-Locations-en.csv'

  const parseFile = (zipFile) => {
    return zip
        .file(zipFile)
        .async('string')
        .then(data => {
          return new Promise((resolve, reject) => {
            Papa.parse(data, {
              header: true,
              error: reject,
              complete: results => {
                resolve(results)
              }
            })
          })
        })
  }

  return zip
      .loadAsync(params.data)
      .then(zipContent => Promise.all([
        parseFile(countryBlocksZip),
        parseFile(countryLocationsZip)
      ]))
      .then(([ipv4, meta]) => {
        const dict = {}
        meta.data.forEach(geo => {
          dict[geo.geoname_id] = geo.country_name
        })

        return {
          ipv4: ipv4.data,
          meta: _.sortBy(meta.data, 'country_name'),
          dict: dict
        }
      })
})
