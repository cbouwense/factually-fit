<template>
  <div v-if="loading" class="loading">
    <img src="https://i.imgur.com/sp66nuO.png" />
    <h1>Loading...</h1>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loading: Boolean,
  },
}
</script>

<style scoped>

.loading {
  text-align: center
}

.loading img {
  animation: rotation 1s infinite linear;
  border-radius: 50%;
  width: 50%;
  height: 50%;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>