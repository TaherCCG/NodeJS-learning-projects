const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  // for demo purposes
  const id = new Date().getDate();

  // Try to keep payload small, better experience for the user.
  // just for demo purposes, in production use a long and complex secret key!!
  // create a token.
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(username, password);
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user);

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
