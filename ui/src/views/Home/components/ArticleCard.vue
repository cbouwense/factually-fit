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

* {
  color: white;
  justify-content: space-around;
}

a {
  background-image: linear-gradient(to bottom right, orange, purple);
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 30px 0;
  min-height: 100px;
  padding: 10px;
  text-decoration: none;
}

h1 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  word-wrap: break-word;
}

h2 {
  font-size: 18px;
}

</style>
