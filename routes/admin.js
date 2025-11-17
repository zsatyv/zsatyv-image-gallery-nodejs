const express = require('express');
const router = express.Router();

// Simple auth middleware (replace with proper auth in production)
const adminAuth = (req, res, next) => {
  const { username, password } = req.query;
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    next();
  } else {
    res.status(401).send('Unauthorized. Use ?username=admin&password=admin123');
  }
};

// Admin dashboard
router.get('/', adminAuth, async (req, res) => {
  try {
    const db = req.app.locals.db;


    const stats = {  };
    res.render('admin', { stats });
  } catch (error) {
    res.status(500).send('Error loading admin panel');
  }
});


module.exports = router;
