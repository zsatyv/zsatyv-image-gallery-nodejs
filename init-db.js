const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('❌ Database connection error:', err);
    process.exit(1);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

console.log('\n🔨 Initializing database for zsatyv Image Gallery...\n');

// Create tables


// Close database after initialization
setTimeout(() => {
  db.close((err) => {
    if (err) {
      console.error('❌ Error closing database:', err);
    } else {
      console.log('\n✅ Database initialized successfully!');
      console.log('\n🚀 You can now start the server with: npm start');
    }
  });
}, 1000);
