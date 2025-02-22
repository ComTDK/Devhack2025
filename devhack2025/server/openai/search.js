// semantic search thing

import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";
import { getEmbedding } from "./processFiles.js";

dotenv.config();

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_INDEX_NAME = "test";
const pinecone = new Pinecone({ apiKey: PINECONE_API_KEY });

async function searchInPinecone(query) {
  try {
    const index = pinecone.Index(PINECONE_INDEX_NAME);

    const queryEmbedding = await getEmbedding(query);

    const queryResult = await index.namespace("ns5").query({
      vector: queryEmbedding,
      topK: 5,
      includeMetadata: true,
    });

    const matches = queryResult.matches.map((match) => ({
      id: match.id,
      score: match.score,
    }));

    console.log("Search Results:", matches);
    return matches;
  } catch (error) {
    console.error("Error searching in Pinecone:", error);
    return [];
  }
}

// Example usage

export { searchInPinecone };
