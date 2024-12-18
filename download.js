const axios = require('axios');
const fs = require('fs');

module.exports = async (req, res) => {
    const { query, filename = 'output_file.txt' } = req.query;

    if (!query) {
        return res.status(400).send('Error: Query parameter is required.');
    }

    try {
        // Fetch data from the external API
        const apiUrl = `https://ameen-api.vercel.app/sfys?query=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        // Save data to a temporary file (optional)
        const filePath = `/tmp/${filename}`;
        fs.writeFileSync(filePath, response.data);

        // Send the file as a response
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.setHeader('Content-Type', 'application/octet-stream');
        res.send(response.data);
    } catch (error) {
        res.status(500).send(`Error downloading data: ${error.message}`);
    }
};

