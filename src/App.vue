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
                <router-link :to="{ name: 'Doc/Installation', params: {} }" class="navbar-item" exact-active-class="is-active">Installation</router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <keep-alive><router-view></router-view></keep-alive>
        </div>
      </div>
      <div class="hero-footer">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li>
                Made by RumbleFrog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
