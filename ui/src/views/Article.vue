<template>
  <div>
    <Loading :loading="store.state.loading" />
    <div v-if="!store.state.loading" class="article">
      <h1 class="heading-element">{{ article.title }}</h1>
      <h3 class="heading-element">{{ article.subtitle }}</h3>
      <p class="date heading-element">Posted on {{ article.date }}</p>
      <div class="heading-element splash">
        <div class="gist">
          <h2>THE GIST</h2>
          <section>
            <p>
              <span v-for="(n, i) in citedGist" :key="i">
                {{ n.text }}<sup>{{ n.ref }}</sup>
              </span>
            </p>
          </section>
        </div>
        <div class="img-container">
          <img :src=article.imgUrl />
        </div>
      </div>
      <h2>THE LONG VERSION</h2>
      <section v-for="(p, i) in citedBody" :key="i">
        <p>
          {{ p.text }}
          <a :href="`#citation-${p.ref}`">
            <sup>{{ p.ref }}</sup>
          </a>
        </p>
        <Dots v-if="i < citedBody.length-1" />
      </section>
      <h2>CITATIONS</h2>
      <Citations v-if="article.citations !== undefined" :citations=article.citations />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import store from "../store";

import Citations from "../components/Citations";
import Dots from "../components/Dots";
import Loading from "../components/Loading";

const addCitationNums = (text, citations) => {
  let tags = [];
  if (citations && text) {
    citations.forEach(c => {
      const tokens = text.split(`{${c.ref}}`);
        tags.push({
          text: tokens[0],
          /* eslint-disable no-extra-boolean-cast */
          ref: !!tokens[0] ? c.ref : `, ${c.ref}`
        });
        if (tokens[1]) {
          text = tokens[1];
        }
    });
  }
  return tags;
}

export default {
  name: "Article",
  components: {
    Citations,
    Dots,
    Loading,
  },
  data() {
    return {
      article: { },
      store: store,
    }
  },
  async created() {
    try {
      this.store.setLoading(true);
      const res = (await (await fetch(`http://localhost:3001/${useRoute().params.articleId}`)).json()).article;
      this.store.setLoading(false);
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
    citedBody: function() {
      return addCitationNums(this.article.body, this.article.citations);
    },
    citedGist: function() {
      return addCitationNums(this.article.gist, this.article.citations);
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

.splash .img-container { 
  width: 40%;
  /* TODO: this should be a variable from the global styles or something */
  right: -30px;
  position: relative;
}

.splash img {
  top: 50%;
  position: absolute;
  object-fit: none;
  object-position: 0 0; /* positioned top left of the content box */
  width: 100%;
  height: 100%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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

sup {
  vertical-align: super;
  font-size: 16px;
}

</style>
