const express = require('express');
const app = express();
const port = 3000;

// Default route
app.get('/', (req, res) => {
  res.send('<h1>Hello from My Node.js App running on EC2!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
