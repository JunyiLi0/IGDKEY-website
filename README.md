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
