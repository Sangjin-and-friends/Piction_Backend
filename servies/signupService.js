const { User } = require("../models");
const bcrypt = require("bcryptjs");

class SignUpService {
  async signup(user, res) {
    const { name, userId, password } = user;
    if (!name || !userId || !password)
      return res.status(400).json("Bad Request");
    const existUser = await User.findOne({ where: { userId: userId } });
    if (existUser) {
      return res.status(409).json("Already User Exists");
    }
    const hash = await bcrypt.hash(password, 10);
    await User.create({
      userId,
      password: hash,
      name,
    });
    return res.status(200).json("success");
  }
}

module.exports = SignUpService;
