const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send({ es: 'functioniert!' });
// });
app.post("/getData", async (req, res) => {
  console.log(req.body);
  const url = "https://sandbox.onboarding-api.evergreen.de/risk-rate/calculate";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log(result);
  res.send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
