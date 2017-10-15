<template>
  <div class="has-text-centered">
    <div v-if="downloading && !processing">
      <h1 class="title">Downloading ...</h1>
      <progress class="progress" :value="progress" max="100">15%</progress>
    </div>
    <div v-if="!downloading && processing">
      <h1 class="title">Processing ...</h1>
      <span class="fa fa-cog fa-spin fa-3x"></span>
    </div>
    <div v-if="!downloading && !processing">
      <b-select multiple expanded>
        <option>
          1
        </option>
        <option>
          2
        </option>
      </b-select>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Country',
  data () {
    return {
      downloading: true,
      processing: false,
      progress: 0,
      files: []
    }
  },
  mounted () {
    // Unfortunately, MaxMind site has no cross-origin header, so we are unable to download directly
    axios.get('/static/download/GeoLite2-Country-CSV.zip', {
      crossdomain: true,
      onDownloadProgress: (progressEvent) => {
        this.progress = Math.round((event.loaded * 100) / event.total)
        console.log(this.progress)
      }
    })
      .then((response) => {
        this.progress = 100
        this.downloading = false
        this.processing = true
      })
  }
}
</script>
