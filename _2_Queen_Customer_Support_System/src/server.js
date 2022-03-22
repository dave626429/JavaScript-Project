const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// getting sqlite connection 'Object'
// getting configuration
const sequelize = require("./database/connection");

// starts sqlite db-connection
sequelize.sync({ force: false }).then(() => {
  console.log("Database is ready to use.");
});

// middlewares
// express response to parse JSON type
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));

// setting views location
app.set("views", path.join(__dirname, "./views"));

// setting templating engin - ejs
app.set("view engine", "ejs");

// express-router implementation
app.use("/", require("./routes/home"));
app.use("/customers", require("./routes/customer"));

app.listen(5000, () => {
  console.log(`Server started at port : ${5000}`);
});
