
# Admin Authentication Setup Guide

This guide will help you set up the admin authentication system for your travel and tourism website.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- React development environment set up

## Backend Setup

### 1. Install Dependencies

Navigate to the backend directory and install the required packages:

```bash
cd travel-backend
npm install bcryptjs jsonwebtoken
```

### 2. Environment Configuration

Create a `.env` file in the `travel-backend` directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travel_tourism
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
JWT_EXPIRE=24h
```

**Important**: Replace `your_super_secret_jwt_key_here_change_this_in_production` with a strong, unique secret key.

### 3. Create Default Admin User

Run the following command to create a default admin user:

```bash
npm run create-admin
```

This will create an admin user with the following credentials:
- **Username**: admin
- **Email**: admin@traveltourism.com
- **Password**: admin123
- **Role**: super-admin

### 4. Start the Backend Server

```bash
npm start
```

The server will start on port 5000.

## Frontend Setup

### 1. Start the React Development Server

In a new terminal, navigate to the main project directory and start the React app:

```bash
cd TravelAndTourism
npm start
```

The React app will start on port 3000.

## Usage

### 1. Access Admin Login

Navigate to your website's home page. You'll find the admin login section between the Features and Top Destinations sections.

### 2. Login with Default Credentials

Use the default admin credentials:
- **Username**: admin (or admin@traveltourism.com)
- **Password**: admin123

### 3. Access Admin Dashboard

After successful login, you'll be redirected to the admin dashboard at `/admin-dashboard`.

## Features

### Admin Authentication
- Secure JWT-based authentication
- Password hashing with bcrypt
- Token expiration (24 hours by default)
- Role-based access control

### Admin Dashboard
- Modern, responsive design
- Sidebar navigation
- Statistics cards
- Recent activity feed
- Quick action buttons
- User management (placeholder)
- Destination management (placeholder)
- Booking management (placeholder)
- Gallery management (placeholder)
- Settings (placeholder)

### Security Features
- Password validation
- Account status checking
- Secure token storage
- Automatic logout on token expiration
- Protected routes

## API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `GET /api/admin/me` - Get current admin profile
- `POST /api/admin/logout` - Admin logout

### Admin Management (Super-admin only)
- `GET /api/admin` - Get all admins
- `POST /api/admin` - Create new admin
- `PUT /api/admin/password` - Update admin password

## Customization

### Adding New Admin Users

1. Login as a super-admin
2. Use the admin management features (to be implemented)
3. Or create directly in the database

### Changing Default Credentials

1. Login with default credentials
2. Go to Settings
3. Change your password
4. For security, change the default admin credentials in production

### Environment Variables

- `JWT_SECRET`: Change this to a strong, unique secret key
- `JWT_EXPIRE`: Modify token expiration time (e.g., "1h", "7d")
- `MONGO_URI`: Update with your MongoDB connection string

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the MONGO_URI in your .env file

2. **JWT Secret Error**
   - Make sure JWT_SECRET is set in your .env file
   - Use a strong, unique secret key

3. **CORS Error**
   - The backend is configured to allow all origins
   - For production, configure CORS properly

4. **Port Already in Use**
   - Change the PORT in your .env file
   - Update the frontend API calls accordingly

### Security Recommendations

1. **Production Deployment**
   - Use HTTPS
   - Set strong JWT secrets
   - Configure proper CORS
   - Use environment variables for sensitive data
   - Implement rate limiting
   - Add request validation

2. **Password Security**
   - Change default passwords immediately
   - Implement password complexity requirements
   - Add password reset functionality

3. **Token Security**
   - Use short expiration times
   - Implement token refresh
   - Store tokens securely

## Support

If you encounter any issues, check the console logs for error messages and ensure all dependencies are properly installed.
