const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/api/data", (req, res) => {
  const cookieValue = req.cookies.myCookie;
  const message = `This is your cookie: ${cookieValue}`;
  console.log(message);
  res.json({ message });
});

app.get("/api/setcookie", (req, res) => {
  res.cookie("serverCookie", "Hi!", {
    httpOnly: true,
    expires: new Date(new Date().getTime() + 50 * 1000),
  });
  res.send("Cookie set successfully");
});

app.get("/api/getcookie", (req, res) => {
  if (req.cookies.serverCookie) {
    res
      .status(200)
      .send(
        `This is the cookie from your server : ${req.cookies.serverCookie}!`
      );
  } else res.status(404).send("no cookies");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
