// this is the one for internal working for follow up message

import OpenAI from "openai";
import dotenv from "dotenv";  

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY

const openai = new OpenAI({
    apiKey: API_KEY,
  });

async function getOpenAIResponse(prompt) {
    try {
        
        const APICall = await openai.chat.completions.create({
          model: "gpt-4o",  
          messages: [
            {
              role: "system",
              content: "You are an AI that generates structured messages based on user input",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        });

        return APICall.choices[0].message.content.trim();

    } catch (error) {
        console.error("Error getting follow up suggestion:", error.message);
        return null;
    }
}

export { getOpenAIResponse };