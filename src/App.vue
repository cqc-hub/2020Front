<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
          <router-view exclude="Login Reg"></router-view>
      </keep-alive>
    </transition>
    <main-tab-bar class="tab-bar"></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "components/content/maintabbar/MainTabBar";
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'
  export default {
    name: 'App',
    data () {
      return {
        transitionName: ''
      }
    },
    components: {
      MainTabBar
    },
    watch:{
      $route (to, from) {
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-left'
        } else {
          this.transitionName = 'slide-right'
        }
      }
    }
  }
</script>
<style scoped>
  @import "assets/css/base.css";

  /*//转场动画*/
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
  /*// 启用硬件加速*/
  will-change: transform;
    transition: all 300ms;
    position: fixed;
  }
  .slide-right-enter {
    transform: translate(-100%, 0);
    transition-timing-function: ease-in;
  }
  .slide-left-enter {
    transform: translate(100%, 0);
    transition-timing-function: ease-in;
  }
</style>
