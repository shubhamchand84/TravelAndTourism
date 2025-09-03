# Deployment Guide for Travel Diary App

This guide provides step-by-step instructions for deploying the Travel Diary App to Render.

## Prerequisites

- A [Render](https://render.com) account
- A MongoDB database (Atlas or other provider)
- Your project code in a Git repository (GitHub, GitLab, etc.)

## Deployment Steps

### Option 1: Deploy using Render Blueprint (Recommended)

1. Push your code to a Git repository
2. Log in to your Render account
3. Click on the "New +" button and select "Blueprint"
4. Connect your Git repository
5. Render will automatically detect the `render.yaml` configuration
6. Set the required environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT token generation
7. Click "Apply" to deploy the application

### Option 2: Manual Deployment

If you prefer to deploy manually:

1. Log in to your Render account
2. Click on the "New +" button and select "Web Service"
3. Connect your Git repository
4. Configure the service:
   - **Name**: travel-diary-app
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add the following environment variables:
   - `NODE_VERSION`: 18.18.0
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT token generation
   - `PORT`: 5000
6. Click "Create Web Service"

## Verifying Deployment

After deployment is complete:

1. Click on the service URL provided by Render
2. You should see the Travel Diary App frontend
3. Test the application by creating an account and adding a travel story

## Troubleshooting

### Common Issues

1. **Application crashes on startup**:
   - Check the logs in the Render dashboard
   - Verify that all environment variables are set correctly
   - Ensure MongoDB connection string is valid and accessible

2. **Frontend loads but API calls fail**:
   - Check the browser console for CORS errors
   - Verify that the backend API routes are working correctly

3. **Build fails**:
   - Check if Node.js version is compatible (18.18.0 recommended)
   - Ensure all dependencies are correctly specified in package.json

## Monitoring and Logs

Render provides built-in monitoring and logging:

1. Navigate to your service in the Render dashboard
2. Click on "Logs" to view application logs
3. Set up alerts for service health monitoring

## Updating Your Deployment

To update your deployed application:

1. Push changes to your Git repository
2. Render will automatically detect the changes and rebuild/redeploy

## Additional Resources

- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)