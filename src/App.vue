<template>
  <div id="app">
    <myheader></myheader>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import myheader from './components/myheader'

export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: large;
  /*margin-top: 60px;*/
}
</style>
