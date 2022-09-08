<template>
  <div>
    <b-card title="Portfolio Web Site" sub-title="">
      <b-button href="https://github.com/WATA-Haru/portfolio">github</b-button>
      <b-card-text>
        <p>作成期間 : 1週間<br>
        フロントエンド: vue.js / bootstrap-vue<br>
        サーバサイド:<br>
        インフラ:git / github<br>
        <p>SPA(シングルページアプリケーション)を作ってみたかったのでvueで作成しました。<br>
          github-pagesでホスティングしました。<br>
          vue.jsもbootstrap5も使ったことが無かったので、環境設定から大変でした。</p>
      </b-card-text>
      
      <div class = "logo-list">
        <h4>tools</h4>
        <img :src="require('../../docs/static/images/vue-js-1.svg')" alt="vue-js-icon" class="small-icon">
        <img :src="require('../../docs/static/images/bootstrap-5-1.svg')" alt="bootstrap-icon" class="small-icon">
        <img :src="require('../../docs/static/images/github-icon-1.svg')" alt="github-icon" class="small-icon">
        <img :src="require('../../docs/static/images/git.svg')" alt="git-icon" class="small-icon">
      </div>

    </b-card>
    </div>
</template>

<script>

export default {
  name: 'cards',
  data () {
    return {
      msg: 'Welcome to works!!'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .wrapper {
    margin-top: 15px;
    margin-bottom: 60px;
    margin-right: 60px;
    margin-left:60px;
  }
  h1 {
    margin-bottom: 20px;
  }
  .logo-list {
    margin-top: 15px;
  }
  .small-icon {
    width: 60px;
    margin-top: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
  }
</style>

