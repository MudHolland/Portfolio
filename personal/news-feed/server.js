const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');
const app = express();

app.use(express.static('.')); // Serve your static files

app.get('/api/feed', async (req, res) => {
    try {
        const url = req.query.url;
        const response = await axios.get(url);
        const parser = new xml2js.Parser();
        const result = await parser.parseStringPromise(response.data);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
}); 