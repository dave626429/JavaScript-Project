require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const sequelize = require("./db.js");
const { verifySessionToken } = require("./routes/utils.js");
const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  console.log("Database is ready to use.");
});

// Middlewares
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieParser());

// Routes
app.use("/login", require("./routes/login"));
app.use("/dashboard", verifySessionToken, require("./routes/dashboard"));
app.use(
  "/protectedroute",
  verifySessionToken,
  require("./routes/protectedroute")
);
app.use("/logout", verifySessionToken, require("./routes/logout"));

app.listen(PORT, () => {
  console.log(`server started at PORT : ${PORT}`);
});

// function verifySessionToken(req, res, next) {
//   const session_token = req.cookies["session_token"];

// }

// GOOGLE API CREDENTIAL
// {
//     "web":{
//     "client_id":"899181175411-leut9ajhdem20rcp76qqg51u0mmrvnic.apps.googleusercontent.com",
//     "project_id":"polished-watch-345413","auth_uri":"https://accounts.google.com/o/oauth2/auth",
//     "token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
//     "client_secret":"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","javascript_origins":["http://localhost:5000"]
//     }
// }
