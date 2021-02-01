<template>
  <div id="page">
    <a href="/"><img id="logo" src="https://i.imgur.com/daGy27V.png" /></a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
