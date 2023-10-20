const { Diary } = require("../models");

class DiaryService {
  async save(req, res) {
    const { userId, subject, contents, imageURL, date, emotions } = req;
    try {
      const createdDiary = await Diary.create({
        subject,
        contents,
        imageURL,
        date: new Date(date),
        userId,
        emotions: JSON.stringify(emotions),
      });
      console.log("Diary created:", createdDiary);
      return res.status(200).json("success");
    } catch (error) {
      console.error("Error creating diary:", error);
      return res.status(500).json("Internal Server Error");
    }
  }

  async getOneDiary(reqDate, reqUserId, res) {
    if (!userId) return res.status(400).json("Bad Request");
    const diary = await Diary.findOne({
      where: { userId: userId, date: reqDate },
    });

    return res.status(200).json(diary);
  }
}

module.exports = DiaryService;
