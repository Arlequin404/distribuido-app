const express = require("express");
const app = express();
app.use(express.json());

app.post("/auth/login", (req, res) => {
  const { user, pass } = req.body;
  if (user === "admin" && pass === "1234") {
    res.json({ token: "fake-jwt-token" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.listen(3000, () => {
  console.log("Auth service running on port 3000");
});
