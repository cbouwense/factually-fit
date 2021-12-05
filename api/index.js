const cors = require("cors");
const express = require("express");
const app = express()
const { Storage } = require('@google-cloud/storage');

// TODO: should probably not have this in index.js, nor just out in the open (outside of a function).
const storage = new Storage();
// Exporting for automated testing purposes.
const bucket = storage.bucket("factually-fit-articles");

async function getArticleByName(name) {
  try {
    // TODO: I don't think I actually need body or gist.
    // const body = (await bucket.file(`${name}/body.txt`).download()).toString();
    // const gist = (await bucket.file(`${name}/gist.txt`).download()).toString();
    const metadata = JSON.parse((await bucket.file(`${name}/metadata.json`).download()).toString());
    const citations = JSON.parse((await bucket.file(`${name}/citations.json`).download()).toString());

    return { metadata, citations };
  } catch (err) {
    console.error("get article by name issue: ", err);
    throw err;
  } 
}

getArticleMetadataByName = async (name) => {
  try {
    return JSON.parse((await bucket.file(`${name}/metadata.json`).download()).toString());
  } catch (err) {
    console.error(err);
  }
}

app.use(express.json());
app.use(cors());

// Routes
app.get("/", async (_, res) => {
  try { 
    // TODO: I can probably only get the metadata.json files with a getFiles option or something.
    const articles = (await bucket.getFiles())[0];
    const metadataForAllArticles = await Promise.all(articles
      .filter(a => {
        const nameTokens = a.metadata.name.split("/");
        return nameTokens[nameTokens.length-1] === "metadata.json";
      })
      .map(async (a) => ({
        id: a.metadata.name.split("/")[0],
        metadata: JSON.parse((await bucket.file(a.metadata.name).download()).toString())
      }))
    );
    return res.status(200).json(metadataForAllArticles);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
});

app.get("/:name", async (req, res) => {
  try {
    const article = await getArticleByName(req.params.name);
    return res.status(200).json({ ...article });
  } catch (err) {
    console.error(err);
    return res.status(err.code).json({ message: err });
  }
});

// TODO: It'd be nice to have this in a config file.
app.listen(3001, () => {
  console.log("Server started on 3001");
});

module.exports = {
  bucket,
  getArticleByName
}