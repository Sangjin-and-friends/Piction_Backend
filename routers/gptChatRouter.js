const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const GptChatService = require("../servies/gptchatService");

const gptChatService = new GptChatService();

router.post("/", async (req, res) => {
  return await gptChatService.chatting(req.body, res);
});

module.exports = router;
