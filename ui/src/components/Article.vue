<template>
  <div class="article">
    <h1 class="heading-element">{{ article.title }}</h1>
    <h3 class="heading-element">{{ article.subtitle }}</h3>
    <p class="date heading-element">Posted on {{ article.date }}</p>
    <div class="heading-element splash">
      <div class="gist">
        <h2>THE GIST</h2>
        <section>
          <p>{{ article.gist }}</p>
        </section>
      </div>
      <div class="img-container">
        <img :src=article.imgUrl />
      </div>
    </div>
    <h2>THE LONG VERSION</h2>
    <section v-for="(p, i) in bodyParagraphs" :key="i">
      <p>{{ p }}</p>
      <Dots v-if="i < bodyParagraphs.length-1" />
    </section>
    <h2>CITATIONS</h2>
    <!--
    <section>
      <ol start="1">
        <section><li>1. <a href="example.com">Carbohydrates and You</a></li></section>
        <section><li>2. <a href="example.com">Schmoopy and the Gang Discuss Macros</a></li></section>
        <section><li>3. <a href="example.com">The Bitter Truth About Sugar</a></li></section>
      </ol>
    </section>
    -->
  </div>
</template>

<script>
import Dots from "./Dots";

export default {
  name: "Article",
  components: {
    Dots
  },
  props: {
    name: String // TODO: does this even make sense? maybe this should come from the route
  },
  data() {
    return {
      article: { }
    }
  },
  async created() {
    try {
      // TODO: make this a real URI
      const res = (await (await fetch("http://localhost:3001/what-is-carbohydrate")).json()).article;
      this.article = {
        body: res.body,
        citations: res.citations,
        date: res.metadata.date,
        gist: res.gist,
        imgUrl: res.metadata.imgUrl,
        subtitle: res.metadata.subtitle,
        title: res.metadata.title
      }
    } catch (err) {
      console.error(err);
    }
  },
  computed: {
    bodyParagraphs: function() {
      return this.article.body?.split("\\n");
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
  object-fit: scale-down;
  /* width: 100%; */
  /* height: 100%; */
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
