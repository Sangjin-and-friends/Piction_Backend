const { User } = require("../models");
const OpenAI = require("openai");
const apiKey = "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";
const openai = new OpenAI({
  apiKey: apiKey,
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
