// this one convert pdf to json file

import OpenAI from 'openai';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY
const openai = new OpenAI({
    apiKey: API_KEY,
});

async function AISummary(inputText) {

    try {
        const APICall = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are an AI that extracts only the name, contact (includes email and LinkedIn URL only), 
                        education (only for recent year education and change it to institution, degree, and year 
                        (like from what year to what year,so let's say the person got multiple history of education, 
                        you should only take the most recent one), but if the person only stated one institution for the education, 
                        then just use that) (also if there's no year present, then leave it as empty string), 
                        and experience like all available experience (includes only position and company if available; if not, just leave 
                        it an empty string, remember only position and company, no more) from a LinkedIn profile and formats it into a structured JSON object. `
                },
                {
                    role: "user",
                    content: `Extract and summarize this text into a structured JSON object:\n\n${inputText}`
                },
            ],

        });

        return JSON.parse(APICall.choices[0].message.content);
    } catch (error) {
        console.error("Error calling API:", error);
        return null;
    }
}

async function extractText(PDFFile) {
    try {

        const PDF = fs.readFileSync(PDFFile);
        const result = await pdfParse(PDF);
        return result.text;

    } catch (error) {
        console.error("Error extracting text:", error);
        return null;
    }
}

async function processPDF(PDFFile) {

    const extractedText = await extractText(PDFFile);
    const summary = await AISummary(extractedText);

    const name = summary.name.split(" ")[0].replace(/[^a-zA-Z0-9_-]/g, "_");
    const fileName = `${name}.json`;
    const JSONObj = {
        summary: summary
    };
    saveAsJSON(JSONObj, fileName);

}

function saveAsJSON(data, fileName) {

    const filePath = path.join(`project`, `JSON_output`);
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, {
            recursive: true
        });
    }
    const outputPath = path.join(`project`, `JSON_output`, fileName);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`File saved as ${outputPath}`);
}

const fileName = 'abhisek.pdf';
const PDFPath = path.join(`project`, `PDF_input`, fileName);

processPDF(PDFPath);