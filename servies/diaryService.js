const { Diary } = require("../models");
const { Op } = require("sequelize");
class DiaryService {
  async save(req, res) {
    const { userId, subject, contents, imageURL, date, emotions } = req;
    const startDate = new Date(`${date}T00:00:00.000Z`);
    const endDate = new Date(`${date}T23:59:59.999Z`);
    if (
      await Diary.findOne({
        where: {
          userId: userId,
          date: {
            [Op.between]: [startDate, endDate],
          },
        },
      })
    )
      return res.status(400).json("already exist");
    try {
      const createdDiary = await Diary.create({
        subject,
        contents,
        imageURL,
        date: new Date(date),
        userId,
        emotions: JSON.stringify(emotions),
      });
      return res.status(200).json("success");
    } catch (error) {
      console.log(error);
      return res.status(500).json("here Internal Server Error");
    }
  }

  async getOneDiary(reqDate, reqUserId, res) {
    if (!reqUserId) return res.status(400).json("Bad Request");

    const isValidDate = /\d{4}-\d{2}-\d{2}/.test(reqDate);
    if (!isValidDate) {
      return res.status(400).json("Invalid Date Format");
    }

    const startDate = new Date(`${reqDate}T00:00:00.000Z`);
    const endDate = new Date(`${reqDate}T23:59:59.999Z`);

    const diary = await Diary.findOne({
      where: {
        userId: reqUserId,
        date: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    return res.status(200).json(diary);
  }
}

module.exports = DiaryService;
