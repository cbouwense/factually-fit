<template>
  <section class="dots">
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
  </section>
</template>

<script>
export default {
  name: "Dots"
}
</script>

<style scoped>
.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 20px;
}

.dots {
  display: flex;
  justify-content: center;
  margin: 60px 0;
}
</style>