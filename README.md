# IGDKEY Portfolio with AI Chat

A 3D portfolio website with an integrated AI chat feature. The project consists of a React frontend deployed on a custom domain (https://igdkey.com) and a Node.js backend API deployed on Vercel.

## 🏗️ Project Structure

```
3d-portfolio/
├── src/                    # Frontend React code
│   ├── components/         # React components
│   │   └── Chat.jsx       # AI Chat component
│   └── sections/          # Portfolio sections
├── backend/               # Backend API for Vercel
│   ├── api/
│   │   └── chat.mjs      # OpenAI API proxy
│   ├── package.json      # Backend dependencies
│   └── vercel.json       # Vercel configuration
├── package.json          # Frontend dependencies
└── vite.config.js        # Vite configuration
```

## 🚀 Deployment Guide

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- GitHub account
- Vercel account
- OpenAI API key

### Step 1: Frontend Setup (GitHub Pages)

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure for custom domain**
   - The `vite.config.js` is configured with `base: "/"` for custom domain
   - The `package.json` has the correct `homepage` field set to https://igdkey.com

4. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Your site will be available at: `https://igdkey.com`

### Step 2: Backend Setup (Vercel)

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```
   
   **Answer the questions:**
   - Set up and deploy? → `Y`
   - Link to existing project? → `N`
   - What's your project's root directory? → `.`
   - Framework → `None`

4. **Configure Environment Variables**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Select your backend project
   - Settings → Environment Variables
   - Add: `OPENAI_API_KEY` with your OpenAI API key

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Step 3: Connect Frontend to Backend

1. **Update the API URL**
   - After deploying the backend, Vercel will give you a URL like:
     `https://your-backend-name.vercel.app`
   - Update the URL in `src/components/Chat.jsx`:
   ```javascript
   const res = await fetch("https://your-backend-name.vercel.app/api/chat", {
   ```

2. **Redeploy frontend**
   ```bash
   npm run build && npm run deploy
   ```

## 🔧 Configuration Files

### Frontend Configuration

**vite.config.js**
```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",  // Custom domain base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});
```

**package.json**
```json
{
  "homepage": "https://igdkey.com",
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

### Backend Configuration

**backend/vercel.json**
```json
{
  "functions": {
    "api/chat.mjs": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, PUT, DELETE, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "X-Requested-With, Content-Type, Authorization, Accept, Origin"
        }
      ]
    }
  ]
}
```

**backend/api/chat.mjs**
```javascript
import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export default async (req, res) => {
  // CORS headers are handled by vercel.json
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
```

## 🔄 Updating Deployments

### Frontend Updates
```bash
# Make changes to your code
npm run build
npm run deploy
```

### Backend Updates
```bash
cd backend
# Make changes to your API
vercel --prod
```

**Important:** After backend updates, the URL might change. Update the frontend accordingly and redeploy.

## 🐛 Troubleshooting

### CORS Issues
- Ensure `vercel.json` is properly configured
- Check that the API URL in `Chat.jsx` is correct
- Verify the backend is deployed and accessible

### API Not Working
- Check Vercel environment variables
- Verify OpenAI API key is valid and has credits
- Check Vercel function logs for errors

### Frontend Not Loading
- Verify GitHub Pages is enabled
- Check the `base` path in `vite.config.js`
- Ensure the `homepage` field in `package.json` is correct

## 📝 Environment Variables

### Vercel (Backend)
- `OPENAI_API_KEY`: Your OpenAI API key (required)

## 🔗 URLs

- **Frontend**: `https://igdkey.com`
- **Backend API**: `https://your-backend-name.vercel.app/api/chat`

## 🛠️ Development

### Local Development
```bash
# Frontend
npm run dev

# Backend (if needed)
cd backend
node server.js  # For local testing
```

### Testing
- Test the API locally with curl:
  ```bash
  curl -X POST http://localhost:3000/api/chat \
    -H "Content-Type: application/json" \
    -d '{"message": "Hello"}'
  ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
