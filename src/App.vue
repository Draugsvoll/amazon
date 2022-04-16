<template>
  <div id="app">
    <appheader></appheader>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>

<script>
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'

export default {
  name: 'App',
  components: {
    appheader: Header,
    appfooter: Footer,
  }
}
</script>

<style>
body, html {
  background:rgb(240, 240, 240);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin:0;
  font-family: "Amazon Ember",Arial,sans-serif;
}
</style>
