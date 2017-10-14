<template>
  <div id="app">
    <div class="container">
      <nav class="navbar is-transparent" role="navigation" aria-label="Main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href=".">
            <img src="../static/favicon/favicon.png" />
          </a>
          <button class="button navbar-burger" @click="navMenuActive = !navMenuActive">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu" :class="{'is-active': navMenuActive}">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Doc</a>
              <div class="navbar-dropdown is-boxed">
                <router-link :to="{ name: 'Documentation', params: {} }" class="navbar-item" exact-active-class="is-active">Installation</router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <keep-alive><router-view></router-view></keep-alive>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          Made with <b-icon icon="heart"></b-icon> by <a href="https://github.com/RumbleFrog" target="_blank">RumbleFrog</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navMenuActive: false
    }
  }
}
</script>
