const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const authRouter = require("./authRouter");
const gptChatRouter = require("./gptChatRouter");
const gptImageRouter = require("./gptImageRouter.js");

router.use("/auth", authRouter);
router.use("/gpt", gptChatRouter);
router.use("/image", gptImageRouter);

module.exports = router;
