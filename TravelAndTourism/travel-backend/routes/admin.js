const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const { protect, authorize } = require("../middleware/auth");

// @desc    Login admin
// @route   POST /api/admin/login
// @access  Public
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate email & password
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide username and password"
      });
    }

    // Check for admin
    const admin = await Admin.findOne({
      $or: [{ username }, { email: username }]
    }).select("+password");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "Account is deactivated"
      });
    }

    // Check if password matches
    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // Update last login
    admin.lastLogin = Date.now();
    await admin.save();

    // Create token
    const token = admin.getSignedJwtToken();

    res.status(200).json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// @desc    Get current logged in admin
// @route   GET /api/admin/me
// @access  Private
router.get("/me", protect, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id);

    res.status(200).json({
      success: true,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin,
        createdAt: admin.createdAt
      }
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// @desc    Logout admin / clear cookie
// @route   POST /api/admin/logout
// @access  Private
router.post("/logout", protect, async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Logged out successfully"
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// @desc    Get all admins (super-admin only)
// @route   GET /api/admin
// @access  Private (super-admin)
router.get("/", protect, authorize("super-admin"), async (req, res) => {
  try {
    const admins = await Admin.find().select("-password");

    res.status(200).json({
      success: true,
      count: admins.length,
      data: admins
    });
  } catch (error) {
    console.error("Get admins error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// @desc    Create new admin (super-admin only)
// @route   POST /api/admin
// @access  Private (super-admin)
router.post("/", protect, authorize("super-admin"), async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      $or: [{ username }, { email }]
    });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin with this username or email already exists"
      });
    }

    const admin = await Admin.create({
      username,
      email,
      password,
      role: role || "admin"
    });

    res.status(201).json({
      success: true,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
        createdAt: admin.createdAt
      }
    });
  } catch (error) {
    console.error("Create admin error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

// @desc    Update admin password
// @route   PUT /api/admin/password
// @access  Private
router.put("/password", protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Please provide current and new password"
      });
    }

    const admin = await Admin.findById(req.admin.id).select("+password");

    // Check current password
    if (!(await admin.matchPassword(currentPassword))) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect"
      });
    }

    admin.password = newPassword;
    await admin.save();

    res.status(200).json({
      success: true,
      message: "Password updated successfully"
    });
  } catch (error) {
    console.error("Update password error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

module.exports = router;
