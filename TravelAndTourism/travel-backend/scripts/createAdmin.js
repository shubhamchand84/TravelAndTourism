const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const createDefaultAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: 'admin' });

    if (existingAdmin) {
      console.log('Default admin already exists');
      process.exit(0);
    }

    // Create default admin
    const admin = await Admin.create({
      username: 'admin',
      email: 'admin@traveltourism.com',
      password: 'admin123',
      role: 'super-admin'
    });

    console.log('Default admin created successfully:');
    console.log('Username: admin');
    console.log('Email: admin@traveltourism.com');
    console.log('Password: admin123');
    console.log('Role: super-admin');

    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

createDefaultAdmin();
