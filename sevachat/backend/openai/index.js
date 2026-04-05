// OpenAI integration
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: 'YOUR_API_KEY',
});
const openai = new OpenAIApi(configuration);