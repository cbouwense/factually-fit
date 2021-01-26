<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
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

.card {
  min-height: 100px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
  margin: 30px 0;
  padding: 10px;
  background-image: linear-gradient(to bottom right, orange, purple);
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 25px;
  word-wrap: break-word;
}

h2 {
  font-size: 35px;
}

</style>
