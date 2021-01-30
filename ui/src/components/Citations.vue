<template>
  <section>
    <ol>
      <li v-for="c in citations" :key="c.ref">
        <p :id="`citation-${c.ref}`">{{ c.ref }}. </p>
        <a :href=c.link target="_blank">{{ c.author }}: {{ c.title }}</a>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "Citations",
  props: {
    citations: Array
  }
}
</script>

<style scoped>

li {
  display: flex;
  margin: 15px 0;
}

</style>