const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const DiaryService = require("../servies/diaryService");

const diaryService = new DiaryService();

router.post("/", async (req, res) => {
  return await diaryService.save(req.body, res);
});

router.post("/:date", async (req, res) => {
  return await diaryService.getOneDiary(req.params.date, req.body.userId, res);
});
router.get("/calendar", async (req, res) => {
  return await diaryService.getDiaryforCalendar(req, res);
});

module.exports = router;
