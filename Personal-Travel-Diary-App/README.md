# Personal Travel Diary Application

## Overview

The Personal Travel Diary is a web application that allows users to document and share their travel experiences. Users can create accounts, add travel stories with images, mark favorites, and search through their travel memories.

## Features

- User authentication (signup, login, logout)
- Create, edit, and delete travel stories
- Upload images for travel stories (supports both local storage and Cloudinary)
- Mark travel stories as favorites
- Search functionality to find specific travel memories
- Responsive design for mobile and desktop use

## Technology Stack

### Frontend
- React.js
- Axios for API requests
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB for database
- Multer for file handling
- Cloudinary integration for production image storage

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MongoDB installed locally or MongoDB Atlas account
- Git installed (for version control)

### Installation

1. Clone the repository or set up a new Git repository (see [Git Repository Setup](#git-repository-setup))
2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```
4. Set up environment variables (see [Environment Configuration](#environment-configuration))

### Environment Configuration

Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STORAGE_TYPE=local  # Change to 'cloudinary' for production

# Required only when STORAGE_TYPE=cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```
2. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```
3. Access the application at `http://localhost:5173`

## Git Repository Setup

To set up a new Git repository for this project:

1. Run the provided batch file:
   ```
   setup_git_repo.bat
   ```
   This will initialize a Git repository, add all files, and help you push to a remote repository.

2. Alternatively, follow the manual steps in the `GIT_SETUP.md` file.

## Deployment

For deployment instructions, including Cloudinary configuration for production, refer to the `DEPLOYMENT.md` file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.