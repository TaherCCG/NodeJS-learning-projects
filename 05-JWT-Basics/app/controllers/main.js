const login = async (req, res) => {
  res.send("Fake Login/Register/Signup route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Taher!`,
    secret: `Here is your lucky number: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
