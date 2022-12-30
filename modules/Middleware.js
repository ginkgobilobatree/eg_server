(() => {
    "use strict";

    async function postData(req, res) {
        const url = "https://sandbox.onboarding-api.evergreen.de/risk-rate/calculate";
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(req.body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        // console.log(result);
        res.send(result);
    }

    async function storeData(req, res) {
      const timestamp = Date.now();
      console.log(req.body)
      console.log(timestamp)
      // const url = irgendwas mongo-mäßiges
      res.send({saved: true})
    }

    module.exports = {postData, storeData}
})();