const { User } = require("../models");
const bcrypt = require("bcryptjs");

class LoginService {
  async signin(user, res) {
    const { userId, password } = user;
    if (!userId || !password) return res.sendStatus(400).json("Bad Request");

    const findUser = await User.findOne({ where: { userId: userId } });
    if (await bcrypt.compare(password, findUser.password)) {
      return res.status(200).json([findUser.name, findUser.userId]);
    } else {
      return res.status(401).json("password wrong");
    }
  }
}

module.exports = LoginService;
