// Import the necessary modules
const openai = require('openai');

// Add your OpenAI API key
openai.apiKey = "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";

// Define the function that will generate a response from the API
function generateResponse(prompt) {
    openai.Completion.create({
        prompt: prompt,
        model: "text-davinci-002",
        temperature: 0.5,
        max_tokens: 2048,
    }, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            console.log(response.choices[0].text);
            document.getElementById("response").textContent = response.choices[0].text;
        }
    });
}

