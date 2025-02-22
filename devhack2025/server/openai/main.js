// this one for determining if its a email or linkedin follow up message

import { getOpenAIResponse } from "./follow_Up.js";
import fs from "fs";
import path from "path";

const fileInput = path.join(`JSON_output`, `abhishek.json`);
const summaryData = JSON.parse(fs.readFileSync(fileInput, "utf8"));

async function generateMessage(method, recipientInfo, senderName) {
  let prompt = "";

  if (method === "email") {
    prompt = `Draft a friendly email for ${senderName} to reconnect with ${
      recipientInfo.name
    }.
        Make the email professional but warm. Include relevant discussion topics based on their background:
        - Education: ${recipientInfo.education.institution} (${
      recipientInfo.education.degree
    })
        - Experience: ${recipientInfo.experience
          .map((exp) => `${exp.position} at ${exp.company}`)
          .join(", ")}
        - Contact via email if available: ${
          recipientInfo.contact.email || "No email provided"
        }

        The email should:
        - Start with a warm greeting
        - Mention how they know each other (if possible)
        - Suggest topics for conversation based on their background
        - End with a friendly closing.`;
  } else if (method === "linkedin") {
    prompt = `Generate a structured JSON object for a LinkedIn message from ${senderName} to reconnect with ${
      recipientInfo.name
    }.
        The message should be warm, friendly, and relevant to their background.
        Include relevant discussion topics based on their education (${
          recipientInfo.education.institution
        }) 
        and experience (${recipientInfo.experience
          .map((exp) => `${exp.position} at ${exp.company}`)
          .join(", ")}). 
        don't include any \`\`\`json word just make the structure like i state below
        Output only a structured JSON object like this:

        {
        "recipientInfo": "${recipientInfo.name}",
        "linkedin_url": "${recipientInfo.contact.LinkedIn}",
        "message": "..."
        }`;
  } else {
    console.error("Invalid method. Choose 'email' or 'linkedin'.");
  }

  const responseText = await getOpenAIResponse(prompt);
  const response = await JSON.parse(responseText);
  console.log(`Generated ${method} message:\n`, response.message);
  return response.message;
  //   saveFile(method, responseText);
}

function saveFile(method, content) {
  const filename = recipientInfo.name
    .split(" ")[0]
    .replace(/[^a-zA-Z0-9_-]/g, "_");
  if (method === "linkedin") {
    try {
      const jsonContent =
        typeof content === "string" ? JSON.parse(content) : content;
      const filePath = path.join(`data_output`, `${filename}.json`);
      fs.writeFileSync(filePath, JSON.stringify(jsonContent, null, 2));
      console.log(`LinkedIn message saved as ${filename}`);
    } catch (error) {
      console.error("Error saving LinkedIn JSON:", error);
    }
  } else if (method === "email") {
    const filePath = path.join(`data_output`, `${filename}.txt`);
    fs.writeFileSync(filePath, content);
    console.log(`Email message saved as ${filename}`);
  } else {
    console.error("Invalid method provided for saving the message.");
  }
}

// Choose email or LinkedIn message
const method = "linkedin"; // Change to "email" for email, or "linkedin" for LinkedIn message
const temp = {
  name: "John Doe",
  contact: {
    LinkedIn: "https://www.linkedin.com/in/johndoe",
  },
  education: {
    institution: "Harvard University",
  },
  experience: [
    {
      position: "Software Engineer",
      company: "TechCorp",
    },
    {
      position: "Senior Developer",
      company: "Innovative Solutions",
    },
  ],
};

generateMessage("linkedin", temp, "Patrick");
export { generateMessage };
