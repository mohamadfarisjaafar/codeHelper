const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/explain-bug', async (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    // Create a prompt for the LLM to explain the bug in the code
    const prompt = `Explain the following bug in the provided code:\n\n${code}\n\nWhat is the error and how can it be fixed?`;

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4', // You can use GPT-3 as well, but GPT-4 provides more advanced results
                prompt: prompt,
                max_tokens: 150,
            }),
        });

        const data = await response.json();
        const explanation = data.choices[0].text.trim();

        // Send the explanation back to the frontend
        res.json({ explanation });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error explaining the bug' });
    }
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
