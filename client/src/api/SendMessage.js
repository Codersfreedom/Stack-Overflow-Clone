
import axios from 'axios'


// Create a function to send a message to OpenAI API

async function sendMessageToOpenAI(message) {
  const apiKey = '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';
  const endpoint = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await axios.post(
      endpoint,
      {
        prompt: message,
        max_tokens: 50, // Adjust this as needed
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error sending message to OpenAI:', error);
    return 'Sorry, there was an error processing your request.';
  }
}

export default sendMessageToOpenAI;


