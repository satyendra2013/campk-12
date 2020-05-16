const path = require('path');
const express = require('express');
const app = express();

//Serve static assets in production
app.use(express.static('build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is up and running at ${PORT}!');
});
