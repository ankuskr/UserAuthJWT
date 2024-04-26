const mongoose = require("mongoose");
require("dotenv").config();

exports.connectdb = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Db connection successful"))
    .catch((err) => {
      console.log("DB coonnection issue");
      console.error(err);
      process.exit(1);
    });
};
