const mongoodb = require("mongoose");
mongoodb
  .connect("mongodb://localhost:27017/School")
  .then(() => {
    console.log("Running Database ....");
  })
  .catch((err) => {
    console.log(err);
  });
