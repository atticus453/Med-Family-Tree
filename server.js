// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAIApi     = require('openai');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAIApi({ apiKey: "apikey" });


// ---------------- TEXT GENERATION ----------------
app.post('/api/generate-text', async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 150,
        });
        res.json({ response: completion.data.choices[0].text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error generating text" });
    }
});

// ---------------- IMAGE GENERATION ----------------
app.post('/api/generate-image', async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const imageResponse = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "512x512",
        });
        const imageUrl = imageResponse.data.data[0].url;
        res.json({ imageUrl: imageUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error generating image" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
