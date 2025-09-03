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