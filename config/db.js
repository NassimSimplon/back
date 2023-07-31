 
const mongoose = require("mongoose");
const db_connection = () => {
    mongoose.set("strictQuery", false);

  mongoose
    .connect('mongodb+srv://walidbenothman:tgtgtgxd97*@cluster0.qqymm.mongodb.net/portfolio'
    )
    .then(() => {
      console.log("Data Base connected");
    })
    .catch(() => {
      console.log("Error DataBase Not Connected");
    });
};
module.exports = db_connection;