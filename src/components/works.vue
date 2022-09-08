<template>
  <div class = "logo-list">
    <h4>tools</h4>
    <img v-for="icon in icons" :src="icon.url" :key="icon.index" class="small-icon">
  </div>
</template>

<script>
export default {
  name: 'logoList',
  data () {
    return {
      icons: [
        {index: 1, url: require('../../static/images/vue-js-1.svg')},
        {index: 2, url: require('../../static/images/bootstrap-5-1.svg')},
        {index: 3, url: require('../../static/images/github-icon-1.svg')},
        {index: 4, url: require('../../static/images/git.svg')}
      ]
    }
  }
}
</script>

<style>
  /*Add "scoped" attribute to limit CSS to this component only*/
  .small-icon {
    width: 60px;
    margin-top: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
  }
</style>
