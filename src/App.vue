<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './components/sites/home'

export default {
  name: 'App',
  components: {
    home: home
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
}
</style>
