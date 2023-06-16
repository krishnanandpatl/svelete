const express = require("express");

const app = express();
const PORT = process.env.PORT || 4045;
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    name: "Krishna",
    age: 23,
  });
});

app.listen(PORT, () => console.log("Server is listening on :", PORT));
