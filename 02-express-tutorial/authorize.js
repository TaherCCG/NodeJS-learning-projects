const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    console.log("Authorised");
    next();
  } else {
    res.status(401).send("Un-Authorised");
    console.log("Un-Authorised");
  }
};

module.exports = authorize;
