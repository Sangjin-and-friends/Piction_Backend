const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const authRouter = require("./authRouter");

router.use("/auth", authRouter);

module.exports = router;
