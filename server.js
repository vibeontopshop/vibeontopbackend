const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const axios = require("axios");

const dbConfig = require("./config/db.config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "Razil-session",
    keys: ["COOKIE_SECRET"],
    httpOnly: true,
  })
);

const db = require("./models/index.model");

db.mongoose
  .connect(`mongodb+srv://VIbeontop:VOT%40244466666@cluster0.1eghu.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "hey:)" });
});

require("./routes/auth.routes")(app);
require("./routes/uploadproduct.route")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
const url = "http://localhost:" + PORT; 
const interval = 60000; 

function reloadWebsite() {
  axios
    .get(url)
    .then(() => console.log("Website reloaded"))
    .catch((error) => console.error(`Error: ${error.message}`));
}

setInterval(reloadWebsite, interval);
