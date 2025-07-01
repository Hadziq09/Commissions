const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/commission', (req, res) => {
  const { name, email, details } = req.body;
  console.log('New commission request:', name, email, details);
  res.json({ message: 'Request received!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
