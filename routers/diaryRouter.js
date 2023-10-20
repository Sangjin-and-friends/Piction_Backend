const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const DiaryService = require("../servies/diaryService");

const diaryService = new DiaryService();

router.post("/", async (req, res) => {
  return await diaryService.save(req.body, res);
});

router.get("/:date", async (req, res) => {
  return await diaryService.getOneDiary(req.params.date, req.body.userId, res);
});

module.exports = router;
