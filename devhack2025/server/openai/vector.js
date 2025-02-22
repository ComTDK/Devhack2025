// this one is for embed the big string and then store it in pinecone

import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { getEmbedding } from "./processFiles.js";

dotenv.config();

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX;
const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY,
});

async function storeInPinecone(Id, userInfo) {
  try {
    const index = pinecone.Index(PINECONE_INDEX_NAME);
    let vectors = [];

    const embedding = await getEmbedding(userInfo);

    vectors.push({
      id: Id,
      values: embedding,
    });

    if (vectors.length === 0) {
      console.log("No valid JSON files found.");
      return;
    }

    await index.namespace("ns5").upsert(vectors);
    return vectors;
  } catch (error) {
    console.error("Error storing data in Pinecone:", error);
  }
}

export { storeInPinecone };
