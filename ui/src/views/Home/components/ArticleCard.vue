<template>
  <a :href=id>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </a>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    id : String,
    title: String,
    subtitle: String,
  }
}
</script>

<style scoped>
/* Mobile Portrait */
* {
  color: white;
  justify-content: space-around;
}

a {
  background-image: linear-gradient(to bottom right, cyan, purple);
  border-radius: 5px;
  box-shadow: 2px 2px 4px 4px #ccc;
  display: flex;
  flex-direction: column;
  min-height: 15vh;
  padding: 10px;
  text-decoration: none;
}

h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  word-wrap: break-word;
}

h2 {
  font-size: 18px;
  font-weight: 400;
}

/* Mobile Landscape */
@media screen 
  and (min-device-width: 360px)
  and (orientation: landscape) {
  a {
    min-height: 33vh;
  }
  
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 24px;
  }
}

/* Tablet Vertical */
@media screen 
  and (min-device-width: 768px)
  and (orientation: portrait) {
  a {
    min-height: 20vh;
  }
  
  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 24px;
  }
}

/* Tablet Horizontal */
@media screen 
  and (min-device-width: 768px)
  and (orientation: landscape) {
  a {
    min-height: 33vh;
  }
  
  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 30px;
  }
}

/* Laptop */
@media screen and (min-device-width: 1366px) {
  
}

/* Desktop */

</style>
