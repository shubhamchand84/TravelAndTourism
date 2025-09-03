# Travel Diary App (Combined Full-Stack Application)

This is a full-stack Travel Diary application with the frontend and backend combined into a single deployable unit. The Express backend serves both the API endpoints and the static React frontend files.

## Project Structure

The application follows a combined structure where:
- Backend API routes are served from `/api/*` endpoints
- Frontend static files are served from the root
- The Express server handles both API requests and serves the React SPA

## Prerequisites

- Node.js (v18.18.0 or compatible)
- MongoDB database

## Setup Instructions

1. Clone the repository
2. Navigate to the project directory
3. Copy `.env.example` to `.env` and update the environment variables

```bash
cp .env.example .env
```

4. Install dependencies for both backend and frontend

```bash
npm run install-all
```

## Development

To run the application in development mode with hot-reloading:

```bash
npm run dev
```

This will start:
- Backend server on port 5000
- Frontend development server on port 5174

## Production Build

To create a production build:

```bash
npm run build
```

This will:
1. Install frontend dependencies
2. Build the React frontend to the `frontend/dist` directory

To start the production server:

```bash
npm start
```

The application will be available at http://localhost:5000

## Deployment

This application is configured for easy deployment to Render using the included `render.yaml` file.

### Deploying to Render

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Create a new Web Service on Render
3. Connect your Git repository
4. Render will automatically detect the `render.yaml` configuration
5. Set the required environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT token generation

The application will be deployed as a single service that handles both the frontend and backend.

## Environment Variables

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret for JWT token generation
- `PORT`: Server port (defaults to 5000)
- `CORS_ORIGIN`: Frontend URL for CORS (only needed in specific deployment scenarios)