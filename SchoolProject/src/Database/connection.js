const mongoodb = require("mongoose");
mongoodb
  .connect("mongodb://localhost:27017/School_All_data")
  .then(() => {
    console.log("Running Database ....");
  })
  .catch((err) => {
    console.log(err);
  });
