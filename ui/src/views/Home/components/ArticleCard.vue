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
/* Mobile Vertical */
* {
  color: white;
  justify-content: space-around;
}

a {
  background-image: linear-gradient(to bottom right, orange, purple);
  border-radius: 5px;
  box-shadow: 2px 2px 4px 4px #ccc;
  display: flex;
  flex-direction: column;
  min-height: 15vh;
  padding: 10px;
  text-decoration: none;
}

h1 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  word-wrap: break-word;
}

h2 {
  font-size: 18px;
  font-weight: 400;
}

/* Mobile Horizontal */
@media screen and (min-width: 640px) {
  a {
    min-height: 33vh;
  }
  
  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 22px;
  }
}

/* Tablet Vertical */
@media screen and (min-width: 768px) {
  
}

/* Tablet Horizontal */

/* Laptop */

/* Desktop */

</style>
