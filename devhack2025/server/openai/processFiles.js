// this is internal working making 1 big string

import fs from 'fs';
import path from 'path';
import dotenv from "dotenv";


dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY

function aggregateJSONContent(directoryPath) {

  let aggregatedText = '';
  const files = fs.readdirSync(directoryPath);

  files.forEach(file => {
    if (path.extname(file) === '.json') {
      const filePath = path.join(directoryPath, file);
      const content = fs.readFileSync(filePath, 'utf8');

      const jsonData = JSON.parse(content);
      aggregatedText += JSON.stringify(jsonData);

    }
  });

  return aggregatedText;
}

async function getEmbedding(text) {

  const response = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {

      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      model: 'text-embedding-ada-002',
      input: text,
    }),
  });
  const data = await response.json();

  return data.data[0].embedding;
}

  
  // const directoryPath = path.join('project', 'JSON_output');
  // const bigString = aggregateJSONContent(directoryPath);
  // console.log(bigString);
  // const result = await getEmbedding(bigString);
  // console.log(result);

export { aggregateJSONContent, getEmbedding };

