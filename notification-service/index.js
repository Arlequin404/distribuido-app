const express = require("express");
const app = express();
app.use(express.json());

app.post("/notify", (req, res) => {
  const { message } = req.body;
  console.log("🔔 Notificación:", message);
  res.json({ status: "Sent", message });
});

app.listen(3000, () => {
  console.log("Notification service running on port 3000");
});
