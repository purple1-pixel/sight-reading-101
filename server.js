const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback: any route returns index.html (useful if you add more pages later)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Sight Reading 101 running on port ${PORT}`);
});
