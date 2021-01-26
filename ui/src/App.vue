<template>
  <div id="page">
    <img id="logo" src="https://i.imgur.com/daGy27V.png" />
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from './components/ArticleList.vue'

export default {
  name: 'App',
  components: {
    ArticleList
  }
}
</script>

<style>
#page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
}

#logo {
  width: 150px;
  height: 150px;
  display: block;
  margin: auto;
}
</style>
