(() => {
  "use strict";

  const MongoDB = require("./MongoDB");

  async function postData(req, res) {
    const url =
      "https://sandbox.onboarding-api.evergreen.de/risk-rate/calculate";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    res.send(result);
  }

  async function storeData(req, res) {
    const timestamp = Date.now(); //simuliert einzigartige URL

    MongoDB.storeInMongoDB(timestamp, req.body);

    res.send({ saved: true, timestamp: timestamp });
  }

  async function getOldResult(req, res) {
    const timestampToNumber = Number(req.params.timestamp);
    const result = await MongoDB.retrieveFromMongoDB(
      { timestamp: timestampToNumber },
      res
    );

    res.send(result);
    return result;
  }

  module.exports = { postData, storeData, getOldResult };
})();
