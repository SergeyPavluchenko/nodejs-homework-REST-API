const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Sergey:nMMLBt4OWbpGVOiO@cluster0.choenjm.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
