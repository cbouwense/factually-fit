<template>
  <div>
    <!-- TODO: img src should come from GCP -->
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
#app {
  color: #2c3e50;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 90vh;
  padding: 5vh;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

#logo {
  width: 150px;
  height: 150px;
  display: block;
  margin: auto;
}
</style>
