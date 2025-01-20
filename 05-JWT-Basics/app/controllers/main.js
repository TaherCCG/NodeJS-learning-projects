const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }

  // for demo purposes
  const id = new Date().getDate();

  // Try to keep payload small, better experience for the user.
  // just for demo purposes, in production use a long and complex secret key!!
  // create a token.
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}!`,
    secret: `Here is your lucky number: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
