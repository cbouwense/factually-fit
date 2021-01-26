<template>
  <div class="article">
    <h1 class="heading-element">{{ title }}</h1>
    <h3 class="heading-element">{{ subtitle }}</h3>
    <p class="date heading-element">Posted on {{ date }}</p>
    <div class="heading-element splash">
      <div class="gist">
        <h2>THE GIST</h2>
        <section>
          <p>{{ gist }}</p>
        </section>
      </div>
      <div class="img-container">
        <img :src=imageUrl />
      </div>
    </div>
    <h2>THE LONG VERSION</h2>
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <section class="dots">
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </section>
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <section class="dots">
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </section>
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <h2>CITATIONS</h2>
    <section>
      <ol start="1">
        <section><li>1. <a href="example.com">Carbohydrates and You</a></li></section>
        <section><li>2. <a href="example.com">Schmoopy and the Gang Discuss Macros</a></li></section>
        <section><li>3. <a href="example.com">The Bitter Truth About Sugar</a></li></section>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      // TODO: fetch this on mount (pre mount?)
      date: new Date().toDateString(),
      gist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://i.imgur.com/sp66nuO.png",
      subtitle: "Joe Brown Revealed",
      title: "What Even is a Carbohydrate?",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  font-size: 28px;
  font-weight: 500;
}

.article {
  padding: 0;
  margin: 0;
}

.date {
  font-size: 16px;
}

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

.gist {
  margin: 50px 0;
  width: 60%;
}

.heading-element {
  margin: 5px 0;
}

.splash {
  display: flex
}

.splash img {
  width: 100%;
  height: 100%;
}

.splash .img-container { 
  width: 40%;
}

h1 { 
  font-size: 50px;
  font-weight: 900;
  word-wrap: normal;
}

h2 {
  font-size: 40px;
  font-weight: 700;
}

h3 { 
  font-size: 24px;
  font-weight: 400;
}

section {
  margin: 30px 0;
}

</style>
