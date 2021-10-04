require("dotenv").config();

module.exports = {
  secret: process.env.AUTH_SECRET,
  expire: process.env.AUTH_EXPIRE || "2h",
  rounds: process.env.AUTH_ROUNDS,
};
