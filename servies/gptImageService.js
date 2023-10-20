const { default: axios } = require("axios");
const { Diary } = require("../models");
require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});
const url = "https://openapi.naver.com/v1/papago/n2mt";

class GptImageService {
  async getImage(req, res) {
    const { userId, subject } = req;
    if (!userId) return res.sendStatus(400).json("Bad Request");
    try {
      const requestBody = {
        source: "ko",
        target: "en",
        text: subject,
      };

      const headers = {
        "X-Naver-Client-Id": "5B35XcbJAt4izibVZyK8",
        "X-Naver-Client-Secret": "FoxtijWTj3",
      };

      const translatedText = await axios.post(url, requestBody, { headers });
      console.log(translatedText.data.message.result.translatedText);
      const responseImage = await openai.images.generate({
        prompt:
          "sketch " +
          translatedText.data.message.result.translatedText +
          " with many more details",
        n: 1,
        size: "1024x1024",
      });
      console.log(responseImage);
      console.log(responseImage.data[0].url);
      return res.status(200).json(responseImage.data[0].url);
    } catch (e) {
      console.log(e);
      return res.status(500).json("500 Internal Server Error");
    }
  }
}

module.exports = GptImageService;
