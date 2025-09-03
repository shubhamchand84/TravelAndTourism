# Travel Diary App Deployment Guide

## Image Storage Configuration

The Travel Diary application supports two methods for storing uploaded images:

1. **Local Storage** (default): Images are stored in the server's filesystem
2. **Cloudinary Storage**: Images are stored in the Cloudinary cloud service

## Configuration Steps

### 1. Environment Variables

The application uses environment variables to determine how to store images. Open the `.env` file in the backend directory and configure the following variables:

```
# Cloudinary configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Set to 'local' for local storage or 'cloudinary' for cloud storage
STORAGE_TYPE=local
```

### 2. Setting Up Cloudinary (for production deployment)

1. Create a free account at [Cloudinary](https://cloudinary.com/)
2. From your Cloudinary dashboard, obtain your:
   - Cloud name
   - API Key
   - API Secret
3. Update the `.env` file with these values
4. Change `STORAGE_TYPE` from `local` to `cloudinary`

### 3. Local vs. Cloud Storage

#### Local Storage (Development)
- Images are stored in the `uploads` folder in the backend directory
- Image URLs will be relative to the server (e.g., `http://localhost:5000/uploads/image.jpg`)
- **Note**: This works well for development but is not suitable for production deployment

#### Cloudinary Storage (Production)
- Images are stored in your Cloudinary account
- Image URLs will be Cloudinary URLs (e.g., `https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/travel-diary/image.jpg`)
- Provides CDN benefits, automatic image optimization, and reliable storage

### 4. Deployment Considerations

When deploying to a production environment:

1. Always use `STORAGE_TYPE=cloudinary` for production deployments
2. Ensure your Cloudinary credentials are kept secure
3. Update any hardcoded URLs in the frontend to use your production domain instead of `localhost`
4. Consider using environment-specific configuration for different deployment environments

### 5. Installing Dependencies

The Cloudinary integration requires the `cloudinary` package, which is already included in the project dependencies. After cloning the repository, run:

```bash
npm install
```

This will install all required dependencies including Cloudinary.

## Troubleshooting

### Image Upload Issues

If images fail to upload to Cloudinary:

1. Verify your Cloudinary credentials in the `.env` file
2. Check that `STORAGE_TYPE` is set to `cloudinary`
3. Ensure your Cloudinary account is active and has available credits
4. Check the server logs for specific error messages

### Local Storage Issues

If using local storage and images are not displaying:

1. Ensure the `uploads` directory exists and is writable
2. Check that the server is correctly serving static files from the `uploads` directory
3. Verify that image URLs in the frontend are correctly pointing to the backend server