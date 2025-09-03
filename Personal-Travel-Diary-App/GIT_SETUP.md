# Git Repository Setup Guide for Travel Diary App

## Introduction

This guide will help you set up a new Git repository for the Travel Diary application and push it to a remote repository like GitHub, GitLab, or Bitbucket.

## Prerequisites

- [Git](https://git-scm.com/downloads) installed on your computer
- A GitHub, GitLab, or Bitbucket account
- Travel Diary application code ready for upload

## Step 1: Initialize a New Git Repository

1. Open a terminal or command prompt
2. Navigate to the root directory of the Travel Diary application:

```bash
cd c:\Users\ASUS\Desktop\travelAndTourism\Personal-Travel-Diary-App
```

3. Initialize a new Git repository:

```bash
git init
```

## Step 2: Configure .gitignore

Before adding files, create or update the `.gitignore` file to exclude unnecessary files:

1. Check if `.gitignore` files already exist in the project (there are separate ones for frontend and backend)
2. Make sure they include these common entries:

```
# Dependencies
node_modules/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build files
/build
/dist

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local uploads (when using local storage)
/backend/uploads/*
!/backend/uploads/.gitkeep

# IDE files
.idea/
.vscode/
*.swp
*.swo
```

3. Create an empty `.gitkeep` file in the uploads directory to maintain the folder structure:

```bash
mkdir -p backend/uploads
type nul > backend/uploads/.gitkeep
```

## Step 3: Add Files to the Repository

1. Add all files to the staging area:

```bash
git add .
```

2. Commit the files:

```bash
git commit -m "Initial commit of Travel Diary application"
```

## Step 4: Create a Remote Repository

### GitHub

1. Go to [GitHub](https://github.com/)
2. Click the '+' icon in the top-right corner and select 'New repository'
3. Name your repository (e.g., "travel-diary-app")
4. Choose public or private visibility
5. Do NOT initialize with README, .gitignore, or license (we already have our files)
6. Click 'Create repository'

### GitLab

1. Go to [GitLab](https://gitlab.com/)
2. Click 'New project'
3. Name your repository
4. Choose visibility level
5. Do NOT initialize with README
6. Click 'Create project'

### Bitbucket

1. Go to [Bitbucket](https://bitbucket.org/)
2. Click 'Create' and select 'Repository'
3. Name your repository
4. Choose visibility
5. Do NOT initialize with README
6. Click 'Create repository'

## Step 5: Link and Push to Remote Repository

1. Link your local repository to the remote repository (replace the URL with your repository URL):

```bash
git remote add origin https://github.com/yourusername/travel-diary-app.git
```

2. Push your code to the remote repository:

```bash
git push -u origin master
# or if you're using main branch
git push -u origin main
```

## Step 6: Verify the Upload

1. Visit your repository on GitHub/GitLab/Bitbucket
2. Ensure all files have been uploaded correctly
3. Check that sensitive files (like .env) are not included in the repository

## Additional Git Commands

### Checking Status

```bash
git status
```

### Creating and Switching Branches

```bash
git branch feature-branch
git checkout feature-branch
# or in one command
git checkout -b feature-branch
```

### Pulling Latest Changes

```bash
git pull origin master
```

### Pushing Changes

```bash
git add .
git commit -m "Description of changes"
git push origin branch-name
```

## Notes About Cloudinary Integration

When deploying the application with Cloudinary for image storage:

1. Make sure to set up environment variables on your deployment platform
2. Never commit your Cloudinary credentials to the repository
3. Set `STORAGE_TYPE=cloudinary` in your production environment

Refer to the `DEPLOYMENT.md` file for more details on configuring Cloudinary for production use.

## Deploying to Render

When deploying this application to Render, follow these guidelines to avoid common issues:

### Monorepo Structure Considerations

This project uses a monorepo structure with separate frontend and backend directories. For deployment:

1. **Option 1: Deploy as Separate Services**
   - Deploy the frontend and backend as separate services on Render
   - Set up proper CORS configuration in the backend
   - Configure environment variables for API endpoints

2. **Option 2: Use Render Blueprints**
   - Create a `render.yaml` file in the root directory to define both services
   - Specify the correct build directories and commands for each

   Example `render.yaml` for this project:

   ```yaml
   services:
     - type: web
       name: travel-diary-frontend
       env: node
       buildCommand: cd frontend && npm install --legacy-peer-deps && npm run build
       startCommand: cd frontend && npm run preview
       envVars:
         - key: NODE_VERSION
           value: 18.18.0
         - key: VITE_API_URL
           value: https://travel-diary-backend.onrender.com

     - type: web
       name: travel-diary-backend
       env: node
       buildCommand: cd backend && npm install
       startCommand: cd backend && npm start
       envVars:
         - key: NODE_VERSION
           value: 18.18.0
         - key: MONGODB_URI
           sync: false
         - key: JWT_SECRET
           sync: false
         - key: CORS_ORIGIN
           value: https://travel-diary-frontend.onrender.com
   ```

### Frontend Deployment

1. Create a Web Service in Render and connect to your Git repository
2. Set the build command to: `npm install --legacy-peer-deps && npm run build`
3. Set the start command to: `npm run preview` or use a static site configuration
4. Ensure your Node.js version is compatible (Render default is 22.16.0)
5. Important: Make sure your `public` directory contains an `index.html` file
6. For Vite projects, set the publish directory to `dist` (default Vite build output)

### Backend Deployment

1. Create a separate Web Service for the backend
2. Set the build command to: `npm install`
3. Set the start command to: `npm start`
4. Configure environment variables for:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret for JWT token generation
   - Any other required environment variables

### Common Deployment Issues

1. **Missing index.html**: If you see an error like `Could not find a required file. Name: index.html`, check:
   - The build output directory configuration in your Vite config
   - That your project structure matches what Render expects
   - For Vite projects, ensure you're pointing to the correct build output directory (`dist`)
   
   To fix this specific issue with the current project structure:
   
   ```bash
   # For a Vite project being deployed as a React app on Render
   # Create a vite.config.js file that explicitly sets the build output directory
   cat > frontend/vite.config.js << 'EOF'
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     build: {
       outDir: '../build', // This matches what Render expects for React apps
     },
   })
   EOF
   ```
   
   Alternatively, you can modify the Render service to use the correct output directory:
   
   ```bash
   # In your Render dashboard, set the publish directory to:
   frontend/dist
   ```

2. **Node.js Version**: If you need a specific Node.js version, set it using:
   - A `.node-version` file in your repository root
   - The `NODE_VERSION` environment variable in Render
   - The `engines` field in your `package.json`

3. **Dependency Issues**: Use `--legacy-peer-deps` flag when installing dependencies if you encounter compatibility issues

4. **CORS Issues**: Ensure your backend has proper CORS configuration to allow requests from your frontend domain

5. **Environment Variables**: Ensure all required environment variables are set in the Render dashboard

6. For more troubleshooting help, refer to: [Render Troubleshooting Guide](https://render.com/docs/troubleshooting-deploys)

## Security Best Practices

1. **Environment Variables**: Never commit sensitive information like API keys, database credentials, or JWT secrets to your repository
   - Use environment variables on your deployment platform
   - Include a `.env.example` file in your repository with dummy values as a template

2. **Dependency Auditing**: Regularly check for vulnerabilities in your dependencies
   ```bash
   npm audit
   # To fix vulnerabilities when possible
   npm audit fix
   ```

3. **CORS Configuration**: Configure CORS in your backend to only allow requests from trusted domains
   ```javascript
   // Example CORS configuration in Express
   import cors from 'cors';
   
   app.use(cors({
     origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
     credentials: true
   }));
   ```

4. **Content Security Policy**: Implement a Content Security Policy in your frontend to prevent XSS attacks

5. **Regular Updates**: Keep your dependencies updated to patch security vulnerabilities