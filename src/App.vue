<template>
  <div id="app">
    <keep-alive>
      <router-view exclude="Login Reg"></router-view>
    </keep-alive>
    <main-tab-bar class="tab-bar"></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "components/content/maintabbar/MainTabBar";
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
<style scoped>
  @import "assets/css/base.css";
</style>
