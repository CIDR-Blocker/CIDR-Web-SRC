<template>
  <div class="has-text-centered">
    <div v-if="downloading">
      <h1 class="title">Downloading ...</h1>
      <progress class="progress" :value="progress" max="100">15%</progress>
    </div>
    <div v-else>
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
export default {
  name: 'Country',
  data () {
    return {
      downloading: true,
      progress: 0,
      files: []
    }
  }
}
</script>
