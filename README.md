# 🤖 SAMRAT - Personal AI Assistant

**SAMRAT** is a ChatGPT-like AI assistant that uses Google Search as its knowledge base, powered by Google Gemini API. Built as a complete full-stack web application.

## ✨ Features

- **ChatGPT-like Interface**: Modern, dark-themed web UI similar to ChatGPT
- **Real-time Google Search**: Integrates with Google Custom Search API for live web data
- **Gemini AI Integration**: Uses Google's Gemini API for intelligent responses
- **Source Attribution**: Shows original sources for answers
- **Responsive Design**: Works on desktop and mobile
- **Personal Assistant**: Your own AI assistant running locally
- **Limitless Customization**: Fully open-source, modify as needed

## 🏗️ Architecture

### Backend
- **Framework**: Express.js (Node.js)
- **API**: RESTful HTTP endpoints
- **AI Engine**: Google Gemini API
- **Search**: Google Custom Search API
- **Language**: JavaScript/Node.js

### Frontend
- **HTML5 + CSS3 + Vanilla JavaScript**
- **ChatGPT-style dark theme**
- **Real-time message display**
- **Message history tracking**
- **Source links display**

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Google API Keys:
  - Google Gemini API key
  - Google Custom Search API key
  - Google Search Engine ID

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/WOLVERINER-KUNG/SAMRAT-AI-Assistant.git
   cd SAMRAT-AI-Assistant
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your API keys:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   GOOGLE_SEARCH_API_KEY=your_search_api_key
   GOOGLE_SEARCH_ENGINE_ID=your_engine_id
   PORT=5000
   ```

4. **Start the Backend Server**
   ```bash
   npm start
   ```
   Server runs on `http://localhost:5000`

5. **Open Frontend**
   - Open `index.html` in your browser
   - Or use `Live Server` extension in VS Code
   - Navigate to `http://localhost:5000` if serving through the backend

## 📋 API Endpoints

### POST /api/chat
**Send a message and get a response**

Request:
```json
{
  "message": "What is the latest news about AI?"
}
```

Response:
```json
{
  "success": true,
  "message": "What is the latest news about AI?",
  "response": "Based on latest web search results...",
  "sources": [
    {
      "title": "Source Title",
      "link": "https://example.com"
    }
  ]
}
```

### GET /api/health
**Check if server is running**

Response:
```json
{
  "status": "SAMRAT is running!",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

## 🔑 Getting API Keys

### Google Gemini API
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the key to `.env` as `GEMINI_API_KEY`

### Google Custom Search API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable "Custom Search API"
4. Create a service account and download credentials
5. Get your `GOOGLE_SEARCH_ENGINE_ID` from [Programmable Search Engine](https://programmablesearchengine.google.com/)

## 📁 Project Structure

```
SAMRAT-AI-Assistant/
├── server.js           # Express backend
├── index.html          # Frontend UI
├── package.json        # Dependencies
├── .env.example        # Environment template
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🛠️ Development

### Run in Development Mode
```bash
npm run dev
```
Uses `nodemon` for auto-restart on file changes

### File Watching
- Automatically restarts server when `server.js` changes
- Edit `index.html` and refresh browser for UI changes

## 🧪 Testing

1. Ensure backend is running: `npm start`
2. Open `index.html` in browser
3. Type a question in the input box
4. Press Enter or click Send
5. SAMRAT will search the web and provide an answer with sources

## 🎨 Customization

### Modify the AI Behavior
Edit the system prompt in `server.js` (line ~40):
```javascript
const prompt = `You are SAMRAT, your custom instructions here...`
```

### Change the UI
- Edit CSS in `index.html` `<style>` section
- Modify colors, fonts, animations
- Customize the sidebar layout

### Add New Features
- Add database support (MongoDB)
- Store chat history
- User authentication
- Multi-language support

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5",
  "@google/generative-ai": "^0.1.3",
  "axios": "^1.6.0",
  "body-parser": "^1.20.2"
}
```

## 🐛 Troubleshooting

### "Connection error"
- Make sure backend is running on `http://localhost:5000`
- Check console for errors
- Verify API keys are correct in `.env`

### "No search results"
- Verify Google Custom Search API is enabled
- Check API quotas in Google Cloud Console
- Ensure Search Engine ID is correct

### "Invalid API key"
- Double-check `.env` file
- Regenerate API keys if needed
- Restart the server after updating keys

## 📝 License

MIT License - Free to use and modify

## 👨‍💻 Author

**Your Name** - SAMRAT Creator

---

## 🔮 Future Roadmap

- [ ] Voice input/output
- [ ] Chat history persistence
- [ ] Multi-user support
- [ ] Advanced search filters
- [ ] Image generation integration
- [ ] Code execution support
- [ ] Browser plugin
- [ ] Mobile app

---

**Made with ❤️ | Questions? Open an issue!**
