import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not set. AI features will fallback gracefully.');
      return null;
    }
    genAIClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAIClient;
}

// College System Prompt for AI Assistant
const COLLEGE_KNOWLEDGE_PROMPT = `
You are "ThomasAI", the intelligent, friendly, and knowledgeable Virtual Campus Advisor for St. Thomas College of Engineering and Technology, Kannur (STM Kannur).
College Details:
- Location: Sivapuram, Mattannur, Kannur District, Kerala - 670702, India (Near Kannur International Airport).
- Affiliation: APJ Abdul Kalam Technological University (KTU).
- Approval: All India Council for Technical Education (AICTE), New Delhi & Govt. of Kerala.
- College Code (KEAM): STM
- Key B.Tech Departments:
  1. Computer Science & Engineering (CSE) - 120 seats
  2. Artificial Intelligence & Data Science (AI & DS) - 60 seats
  3. Electronics & Communication Engineering (ECE) - 60 seats
  4. Mechanical Engineering (ME) - 60 seats
  5. Civil Engineering (CE) - 60 seats
  6. Electrical & Electronics Engineering (EEE) - 30 seats
- Admission Quotas: Merit (via KEAM - 50%), Management Quota (35%), NRI Quota (15%), Lateral Entry into 2nd year.
- Campus Highlights: 15+ acre green Wi-Fi campus, state-of-the-art labs, Advanced Computing Lab, Robotics & IoT FabLab, Central Digital Library (DELNET/IEEE), Separate Men's & Women's Hostels, College Bus fleet covering Kannur, Thalassery, Mattannur, Iritty, Payyanur, Koothuparamba.
- Placement Highlights: 92%+ placement record, Top recruiters include TCS, Infosys, Cognizant, Wipro, UST Global, IBS Software, QBurst, Tata Elxsi, Speridian, Quest Global.
- Extracurriculars: IEDC (Innovation & Entrepreneurship Cell), NSS Unit, IEEE Student Branch, CSI Chapter, 'AURA' National Tech Fest, 'Tharunyam' Arts Fest, Annual Sports Meet.
- Contact: Admission Helpline: +91 490 2401700, +91 94473 82700 | Email: admission@stthomaskannur.ac.in / info@stthomaskannur.ac.in

Your task:
- Answer student, parent, and visitor queries accurately, concisely, politely, and helpfully.
- Use markdown formatting with bullet points when explaining procedures, fees, eligibility, or courses.
- Keep tone professional yet warm, encouraging prospective students and assisting current KTU scholars.
`;

// AI Assistant endpoint
app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        reply: `Thank you for your question about St. Thomas College of Engineering & Technology (STM Kannur)! For immediate admissions or academic assistance, please call our helpline at **+91 490 2401700** or email **admission@stthomaskannur.ac.in**. (Note: Connect your Gemini API Key in Settings > Secrets for real-time AI conversation).`,
      });
    }

    // Build context with history
    const contents: any[] = [];
    
    // Add history
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-6)) {
        if (item.role && item.text) {
          contents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }],
          });
        }
      }
    }

    // Add current query
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents,
      config: {
        systemInstruction: COLLEGE_KNOWLEDGE_PROMPT,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    const reply = response.text || "I apologize, I could not generate a response right now. Please reach out to admission@stthomaskannur.ac.in.";
    return res.json({ reply });
  } catch (error: any) {
    console.error('Gemini chat error:', error);
    return res.status(500).json({
      error: 'Failed to communicate with AI Assistant',
      details: error.message,
    });
  }
});

// Admissions Inquiry API
app.post('/api/admissions/inquiry', (req, res) => {
  const { name, email, phone, course, category, district, marks } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and Phone number are required' });
  }

  // Simulated registration response with reference number
  const referenceId = `STM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  
  return res.json({
    success: true,
    referenceId,
    message: `Thank you ${name}! Your admission inquiry for ${course || 'B.Tech'} has been logged. Our Admission Counselor will contact you shortly at ${phone}.`,
    timestamp: new Date().toISOString(),
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', college: 'St. Thomas College of Engineering & Technology, Kannur' });
});

// Vite middleware for development & static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`St. Thomas College portal running on http://localhost:${PORT}`);
  });
}

startServer();
