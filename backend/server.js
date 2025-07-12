require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await axios.post(
            OPENAI_API_URL,
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`)); 