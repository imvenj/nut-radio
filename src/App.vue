<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #efefef !important;
  font-size: 0.5rem;
  padding-top: 1rem;

  .nut-navbar {
    background-color: #ff4f18 ;
    color: white;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
