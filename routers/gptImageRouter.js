const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const GptImageService = require("../servies/gptImageService");

const gptImageService = new GptImageService();

router.post("/", async (req, res) => {
  return await gptImageService.getImage(req.body, res);
});

module.exports = router;
