<template>
  <div class="has-text-centered">
    <div v-if="downloading && !parsing">
      <h1 class="title">Downloading ...</h1>
      <progress class="progress" :value="dl_progress" max="100">{{dl_progress}}%</progress>
    </div>
    <div v-if="!downloading && parsing">
      <h1 class="title">Parsing ...</h1>
      <span class="fa fa-cog fa-spin fa-3x"></span>
    </div>
    <div v-if="!downloading && !parsing && !processing">
      <h1 class="title">Pick Countries (Hold Ctrl to Pick Multiple)</h1>
      <b-field>
        <b-select multiple expanded v-model="selected_country" native-size="15">
          <option v-for="country in meta" v-if="country.country_name != '' && isValid(country.country_name)" :value="country.geoname_id">
            {{ country.country_name }}
          </option>
        </b-select>
      </b-field>
      <b-field>
        <button class="button is-primary" style="width:100%">Generate</button>
      </b-field>
    </div>
    <div v-if="!downloading && !parsing && processing">
      <h1 class="title">Processing ...</h1>
      <span class="fa fa-cog fa-spin fa-3x"></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JSZip from 'jszip'
import Papa from 'papaparse'
import _ from 'lodash'
export default {
  name: 'Country',
  data () {
    return {
      downloading: true,
      dl_progress: 0,
      parsing: false,
      processing: false,
      data: null,
      ipv4: [],
      meta: [],
      dict: {},
      selected_country: []
    }
  },
  mounted () {
    // Unfortunately, MaxMind site has no cross-origin header, so we are unable to download directly
    axios.get('/static/download/GeoLite2-Country-CSV.zip', {
      crossdomain: true,
      responseType: 'blob', // JSZIP only takes in binary data, so we set the response as blob (binary)
      onDownloadProgress: (progressEvent) => {
        this.dl_progress = Math.round((event.loaded * 100) / event.total)
      }
    })
      .then((response) => {
        this.progress = 100
        this.downloading = false
        this.parsing = true
        this.data = response.data
        this.parse()
      })
  },
  methods: {
    parse () {
      let zip = new JSZip()
      zip.loadAsync(this.data)
        .then((zipContent) => {
          zip.file('GeoLite2-Country-CSV_20171003/GeoLite2-Country-Blocks-IPv4.csv').async('string').then((data) => {
            Papa.parse(data, {
              header: true,
              complete: (results) => {
                this.ipv4 = results.data
                zip.file('GeoLite2-Country-CSV_20171003/GeoLite2-Country-Locations-en.csv').async('string').then((data) => {
                  Papa.parse(data, {
                    header: true,
                    complete: (results) => {
                      this.meta = _.sortBy(results.data, 'country_name')
                      results.data.forEach((country) => {
                        this.dict[country.geoname_id] = country.country_name
                      })
                      this.parsing = false
                    }
                  })
                })
              }
            })
          })
        })
    },
    isValid (str) {
      return /^[0-9a-zA-Z]+$/.test(str)
    },
    process () {
      let out = []

      this.ipv4.forEach((block) => {
        if (this.selected_country.includes(block.registered_country_geoname_id)) {
          out.push({cidr: block.network, comment: this.dict[block.registered_country_geoname_id]})
        }
      })
    }
  }
}
</script>
