# Setup Instructions for Combined Application

Follow these steps to set up the combined application structure from the original separate frontend and backend projects.

## Step 1: Copy Backend Files

Copy the following directories and files from the original backend directory to the combined-app/backend directory:

```
backend/assets
backend/config
backend/controllers
backend/models
backend/routes
backend/uploads
backend/utils
backend/multer.js
```

## Step 2: Copy Frontend Files

Copy the following directories and files from the original frontend directory to the combined-app/frontend directory:

```
frontend/public
frontend/src
frontend/index.html
frontend/eslint.config.js
```

## Step 3: Install Dependencies

Navigate to the combined-app directory and run:

```bash
npm run install-all
```

This will install both the backend dependencies and the frontend dependencies.

## Step 4: Create Environment File

Copy the .env.example file to .env and update the environment variables:

```bash
cp .env.example .env
```

Update the following variables in the .env file:
- MONGO_URI: Your MongoDB connection string
- JWT_SECRET: A secret key for JWT token generation

## Step 5: Start Development Servers

To start both the backend and frontend development servers:

```bash
npm run dev
```

## Step 6: Build for Production

To build the application for production:

```bash
npm run build
```

This will build the frontend and prepare it to be served by the Express backend.

## Step 7: Start Production Server

To start the production server:

```bash
npm start
```

The application will be available at http://localhost:5000