const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb+srv://rahulrajmehra06:bs53QS4aEfurXnOb@cluster1.6gkwe5g.mongodb.net/")
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("there was some error", err);
    });
}

module.exports = connect;

