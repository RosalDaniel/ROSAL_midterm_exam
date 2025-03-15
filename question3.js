const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Rosal, Mary Daniel P.' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
