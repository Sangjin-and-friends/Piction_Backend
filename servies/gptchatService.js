const { User } = require("../models");
require("dotenv").config();
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});
class GptChatService {
  async chatting(req, res) {
    const { userId, question } = req;
    if (!userId) return res.sendStatus(400).json("Bad Request");
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: question },
        ],
      });
      console.log(response.choices[0].message.content);

      return res.status(200).json(response.choices[0].message.content);
    } catch (e) {
      console.log(e);
      return res.status(500);
    }
  }
}

module.exports = GptChatService;
