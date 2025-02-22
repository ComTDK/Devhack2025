import { Pinecone } from "@pinecone-database/pinecone";
import dotenv from "dotenv";

dotenv.config();

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

async function createIndex() {
  const indexName = "my-index"; // Change this if needed

  try {
    const indexes = await pinecone.listIndexes();
    if (!indexes.includes(indexName)) {
      console.log("⚠️ Index not found! Creating a new one...");
      await pinecone.createIndex({
        name: indexName,
        dimension: 1536, // Match the vector dimension of your embeddings
        metric: "cosine",
      });
      console.log("✅ Index created successfully!");
    } else {
      console.log("✅ Index already exists.");
    }
  } catch (error) {
    console.error("❌ Error creating index:", error);
  }
}

createIndex();
