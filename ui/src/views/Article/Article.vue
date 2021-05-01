<template>
  <div>
    <Loading :loading="store.state.loading" />
    <div v-if="!store.state.loading" class="article">
      <section>
        <h1 class="heading-element">{{ article.title }}</h1>
        <h3 class="heading-element">{{ article.subtitle }}</h3>
        <p class="date heading-element">Posted on {{ article.date }} | Last edited on {{ article.last_edited }}</p>
      </section>
      <section class="splash">
        <div class="img-container">
          <img :src=article.imgUrl />
        </div>
      </section>
      <section>
        <h2>THE GIST</h2>
        <p>
          <span v-for="(n, i) in citedGist" :key="i">
            {{ n.text }}<sup>{{ n.ref }}</sup>
          </span>
        </p>
      </section>
      <section>
        <h2>THE LONG VERSION</h2>
        <div v-for="(p, i) in citedBody" :key="i">
          <p>
            {{ p.text }}
            <a :href="`#citation-${p.ref}`">
              <sup>{{ p.ref }}</sup>
            </a>
          </p>
          <Dots v-if="i < citedBody.length-1" />
        </div>
      </section>
      <section>
        <h2>CITATIONS</h2>
        <Citations v-if="article.citations !== undefined" :citations=article.citations />
      </section>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import store from "../../store";

import Citations from "./components/Citations";
import Dots from "./components/Dots";
import Loading from "../../components/Loading";

const addCitationNums = (text, citations) => {
  let citedTextTokens = [];
  if (citations && text) {
    let startIdx = 0;
    let endIdx = 1;
    
    while (endIdx < text.length) {
      // Extract the text before a reference.
      while (text.charAt(endIdx) !== "{" && endIdx < text.length) {
        endIdx++;
      }
      if (endIdx >= text.length) {
        break;
      }
      const textToken = text.substring(startIdx, endIdx);
      console.log("textToken: ", textToken)

      // Extract the reference from the curly braces.
      startIdx = endIdx + 1;
      endIdx = startIdx + 1;
      
      while (text.charAt(endIdx) !== "}") {
        endIdx++;
      }
      const refToken = text.substring(startIdx, endIdx);

      startIdx = endIdx + 1;
      endIdx = startIdx + 1;

      citedTextTokens.push({
        ref: refToken,
        text: textToken
      }); 
    }

    if (startIdx < text.length) {
      citedTextTokens.push({
        ref: undefined,
        text: text.substring(startIdx)  
      });
    }

    console.log("citedTextTokens: ", citedTextTokens);
  }
  return citedTextTokens;
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
      this.article = {
        body: res.body,
        citations: res.citations,
        date: res.metadata.date,
        gist: res.gist,
        imgUrl: res.metadata.imgUrl,
        subtitle: res.metadata.subtitle,
        title: res.metadata.title
      }
      this.store.setLoading(false);
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

/* Mobile Styles */

* {
  color: rgb(41, 41, 41);
  word-break: break-word;
  /* -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased; */
}

h1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
}

h2 {
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 30px;
}

h3 {
  color: rgb(117, 117, 117);
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

p {
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

section {
  margin: 30px 0;
}

sup {
  vertical-align: super;
  font-size: 16px;
}

.date {
  font-size: 16px;
}

.heading-element {
  margin: 5px 0;
}

.img-container {
  height: 200px; /* TODO: probably change this? */
  width: 100%;
}

/* Desktop Styles */

@media screen and (min-width: 1920px) {
  * {
    font-size: 46px;
    font-weight: 700;
  }
}

/* Laptop Styles */


/* Tablet Styles */


</style>