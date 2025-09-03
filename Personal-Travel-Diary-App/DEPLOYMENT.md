# Deployment Guide for Travel Diary App

## Deploying to Render

This project is configured for easy deployment to Render using the `render.yaml` blueprint file.

### Prerequisites

- A Render account
- MongoDB Atlas account (or any MongoDB provider)
- Git repository with your code

### Deployment Steps

1. **Push your code to a Git repository**
   - Follow the instructions in `GIT_SETUP.md`

2. **Create a new Blueprint on Render**
   - Log in to your Render dashboard
   - Click on "Blueprints" in the sidebar
   - Click "New Blueprint Instance"
   - Connect your Git repository
   - Render will automatically detect the `render.yaml` file

3. **Configure Environment Variables**
   - You'll need to set the following environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure random string for JWT token generation

4. **Deploy the Blueprint**
   - Click "Apply" to deploy both the frontend and backend services
   - Render will automatically build and deploy your application

### Manual Deployment (Alternative)

If you prefer to deploy the services manually:

#### Frontend Deployment

1. Create a new Web Service on Render
2. Connect your Git repository
3. Configure the service:
   - **Environment**: Node
   - **Build Command**: `cd frontend && npm install --legacy-peer-deps && npm run build`
   - **Start Command**: `cd frontend && npm run preview`
   - **Environment Variables**:
     - `NODE_VERSION`: `18.18.0`
     - `VITE_API_URL`: URL of your backend service

#### Backend Deployment

1. Create a new Web Service on Render
2. Connect your Git repository
3. Configure the service:
   - **Environment**: Node
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment Variables**:
     - `NODE_VERSION`: `18.18.0`
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure random string for JWT token generation
     - `CORS_ORIGIN`: URL of your frontend service

## Troubleshooting

If you encounter any deployment issues, refer to the troubleshooting section in `GIT_SETUP.md` or check the [Render Troubleshooting Guide](https://render.com/docs/troubleshooting-deploys).

## Cloudinary Integration (Optional)

If you want to use Cloudinary for image storage:

1. Create a Cloudinary account
2. Add these environment variables to your backend service:
   - `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
   - `CLOUDINARY_API_KEY`: Your Cloudinary API key
   - `CLOUDINARY_API_SECRET`: Your Cloudinary API secret
   - `STORAGE_TYPE`: Set to `cloudinary`