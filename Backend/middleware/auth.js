const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.headers["x-auth-token"] || req.headers["Authorization"];

  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    jwt.verify(token, "myprivatekey");
    // console.log("verified");
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
