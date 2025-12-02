require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to search Google
async function searchGoogle(query) {
  try {
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        q: query,
        key: process.env.GOOGLE_SEARCH_API_KEY,
        cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
        num: 5
      }
    });
    return response.data.items || [];
  } catch (error) {
    console.error('Google Search Error:', error);
    return [];
  }
}

// Function to get Gemini response with web context
async function getSamratResponse(userQuery, searchResults) {
  try {
    // Build context from search results
    let context = 'Based on latest web search results:\n';
    searchResults.forEach((result, idx) => {
      context += `${idx + 1}. ${result.title}: ${result.snippet}\n`;
    });

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `You are SAMRAT, a helpful AI assistant. ${context}\n\nUser question: ${userQuery}\n\nProvide a comprehensive answer using the search context above.`;
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Sorry, I encountered an error processing your request.';
  }
}

// Main chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Search Google for relevant information
    const searchResults = await searchGoogle(message);
    
    // Get SAMRAT response
    const response = await getSamratResponse(message, searchResults);
    
    res.json({
      success: true,
      message: message,
      response: response,
      sources: searchResults.map(r => ({ title: r.title, link: r.link }))
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'SAMRAT is running!', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🤖 SAMRAT Assistant running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/chat`);
});

module.exports = app;
