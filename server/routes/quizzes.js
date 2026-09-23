const express = require('express');
const router = express.Router();
const { GoogleGenAI } = require('@google/genai');

// POST /api/quizzes/generate
// Body: { skill: "Java" }
router.post('/generate', async (req, res) => {
  try {
    const { skill } = req.body;
    
    if (!skill) {
      return res.status(400).json({ msg: 'Skill is required' });
    }
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ msg: 'GEMINI_API_KEY is not configured in the server environment.' });
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });

    const prompt = `Generate exactly 30 extremely difficult quiz questions for the technical skill: "${skill}". 
    The first 25 questions must be highly complex theoretical or conceptual questions. 
    The final 5 questions must be difficult coding snippet analysis questions.
    Each question must have exactly 4 options (ids: A, B, C, D) and one correct answer.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              question: { type: "STRING", description: "The quiz question text." },
              options: {
                type: "ARRAY",
                items: {
                  type: "OBJECT",
                  properties: {
                    id: { type: "STRING", description: "Option identifier: A, B, C, or D" },
                    text: { type: "STRING", description: "The text of the option" }
                  }
                }
              },
              correctAnswer: { type: "STRING", description: "The id of the correct option (A, B, C, or D)" }
            }
          }
        }
      }
    });

    const quizText = response.text;
    const quizData = JSON.parse(quizText);

    res.json(quizData);
  } catch (err) {
    console.error('Error generating quiz:', err.message);
    res.status(500).send('Server Error generating quiz');
  }
});

module.exports = router;
