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
        res.send(result);
    }

    module.exports = {postData}
})();