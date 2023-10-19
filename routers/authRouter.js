const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const SignUpService = require("../servies/signupService");
const LoginService = require("../servies/loginService");

const signupService = new SignUpService();
const loginService = new LoginService();

router.post("/signup", async (req, res) => {
  return await signupService.signup(req.body, res);
});

router.post("/signin", async (req, res) => {
  return await loginService.signin(req.body, res);
});

module.exports = router;
