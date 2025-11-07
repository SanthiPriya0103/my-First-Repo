const express = require('express');
const app = express();
const port = 3000;

// Default route
app.get('/', (req, res) => {
  res.send('<h1>Hello, World! 🚀</h1><p>This is my first Node.js app!</p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
