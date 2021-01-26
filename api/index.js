const cors = require("cors");
const express = require("express");
const app = express()
const { Storage } = require('@google-cloud/storage');

// TODO: should probably not have this in index.js
const storage = new Storage();
const bucket = storage.bucket("factually-fit-articles");

const getArticleByName = async (name) => {
  try {
    const body = (await bucket.file(`${name}/body.txt`).download()).toString();
    const gist = (await bucket.file(`${name}/gist.txt`).download()).toString();
    const metadata = JSON.parse((await bucket.file(`${name}/metadata.json`).download()).toString());
    const citations = JSON.parse((await bucket.file(`${name}/citations.json`).download()).toString());
    return { body, gist, metadata, citations };
  } catch (err) {
    console.error(err);
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
    const metadataJsons = await Promise.all(articles
      .filter(a => {
        const nameTokens = a.metadata.name.split("/");
        return nameTokens[nameTokens.length-1] === "metadata.json";
      })
      .map(async (a) => JSON.parse((await bucket.file(a.metadata.name).download()).toString())));
    return res.status(200).json(metadataJsons);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
});

app.get("/:name", async (req, res) => {
  try {
    const article = await getArticleByName(req.params.name);
    return res.status(200).json({ article });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
});

app.listen(3001, () => {
  console.log("Server started on 3001");
});