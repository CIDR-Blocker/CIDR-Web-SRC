import process from 'webpack-worker/process'
import Papa from 'papaparse'
import JSZip from 'jszip'
import _ from 'lodash'

process((params, emit) => {
  emit(0)
  let zip = new JSZip()
  zip.loadAsync(params.data)
    .then((zipContent) => {
      zip.file('GeoLite2-Country-CSV_20171003/GeoLite2-Country-Blocks-IPv4.csv')
        .async('string')
        .then(data => {
          emit(25)
          Papa.parse(data, {
            header: true,
            complete: ipv4 => {
              emit(50)
              zip.file('GeoLite2-Country-CSV_20171003/GeoLite2-Country-Locations-en.csv')
                .async('string')
                .then(data => {
                  emit(75)
                  Papa.parse(data, {
                    header: true,
                    complete: meta => {
                      emit(100)
                      let dict = {}
                      meta.data.forEach(geo => {
                        dict[geo.geoname_id] = geo.country_name
                      })
                      return {
                        ipv4: ipv4.data,
                        meta: _.sortBy(meta.data, 'country_name'),
                        dict: dict
                      }
                    }
                  })
                })
            }
          })
        })
    })
})
