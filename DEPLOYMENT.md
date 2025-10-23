# Deployment Guide

This guide provides step-by-step instructions for deploying your Vite + React + TypeScript application to various platforms.

## Prerequisites

Before deploying, ensure:
- All errors are fixed (run `npm run build` locally to verify)
- All tests pass (run `npm test`)
- Environment variables are configured if needed

## Deployment Options

### 1. Vercel (Recommended for Quick Deployment)

Vercel is the easiest and fastest way to deploy your application.

#### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the framework (Vite)
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to complete deployment.

#### Configuration:
The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support

**Your app will be live at**: `https://your-project.vercel.app`

---

### 2. Netlify

Netlify is another excellent option for static site deployment.

#### Steps:

1. **Deploy via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings are auto-configured from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

**Your app will be live at**: `https://your-project.netlify.app`

---

### 3. GitHub Pages

Deploy your app for free using GitHub Pages.

#### Steps:

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Update vite.config.ts** (if using a repository path):
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Add this line
     // ... rest of config
   })
   ```

3. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

4. The workflow in `.github/workflows/deploy-github-pages.yml` will automatically:
   - Build your application
   - Deploy to GitHub Pages

**Your app will be live at**: `https://your-username.github.io/your-repo-name/`

---

### 4. Docker Deployment

Deploy your application using Docker to any cloud provider (AWS, GCP, Azure, DigitalOcean, etc.)

#### Steps:

1. **Build the Docker image**:
   ```bash
   docker build -t agentic-compile-craft .
   ```

2. **Run locally to test**:
   ```bash
   docker run -p 8080:80 agentic-compile-craft
   ```
   Visit `http://localhost:8080` to verify.

3. **Deploy to Docker Hub**:
   ```bash
   docker tag agentic-compile-craft your-username/agentic-compile-craft
   docker push your-username/agentic-compile-craft
   ```

4. **Deploy to cloud providers**:

   **DigitalOcean App Platform**:
   - Create new app from Docker Hub
   - Select your image
   - Configure port 80
   - Deploy

   **AWS ECS/Fargate**:
   - Push image to ECR
   - Create ECS task definition
   - Create service
   - Configure load balancer

   **Google Cloud Run**:
   ```bash
   gcloud run deploy agentic-compile-craft \
     --image your-username/agentic-compile-craft \
     --platform managed \
     --allow-unauthenticated
   ```

---

### 5. Railway

Railway offers simple deployment with automatic HTTPS.

#### Steps:

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect Node.js
5. Set environment variables if needed
6. Deploy

**Your app will be live at**: Railway will provide a URL

---

### 6. Render

Render provides free static site hosting.

#### Steps:

1. Go to [render.com](https://render.com)
2. Click "New" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Create Static Site"

**Your app will be live at**: `https://your-project.onrender.com`

---

## Environment Variables

If your application uses environment variables (e.g., for Supabase):

1. **Create `.env` file locally** (not committed to git):
   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-key
   ```

2. **Configure in deployment platform**:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **GitHub Pages**: Repository Settings → Secrets and variables → Actions
   - **Docker**: Use `-e` flag or docker-compose

---

## Custom Domain

After deployment, you can add a custom domain:

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records

### GitHub Pages:
1. Add a `CNAME` file to your `public` folder with your domain
2. Update DNS records to point to GitHub Pages

---

## Monitoring & Analytics

Consider adding:
- **Google Analytics**: For user tracking
- **Sentry**: For error monitoring
- **Vercel Analytics**: Built-in performance monitoring

---

## Troubleshooting

### Build fails:
- Check Node.js version (use Node 18+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### 404 on routes:
- Ensure SPA routing is configured (already done in vercel.json, netlify.toml, and Dockerfile)

### Environment variables not working:
- Ensure variables are prefixed with `VITE_`
- Rebuild after adding new variables

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint code
npm run lint
```

---

## Recommended Deployment

For this project, we recommend **Vercel** for the following reasons:
- Zero configuration required
- Automatic HTTPS
- Global CDN
- Great performance
- Free tier available
- Easy rollbacks
- Preview deployments for PRs

Simply run `vercel` in your terminal or connect via the Vercel dashboard!
