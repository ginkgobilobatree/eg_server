const express = require('express');
const app = express(); 
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const port = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// app.get('/', (req, res) => {
//     res.send({ es: 'functioniert!' }); 
// });
app.get('/getData', async (req, res) => {
    const url =
    // "https://sandbox.onboarding-api.evergreen.de/api/#/Risk%20Rate/RiskRateController_calcRiskRate";
    'https://sandbox.onboarding-api.evergreen.de/risk-rate/calculate'
    const data = {
        goal: "Retirement",
        age: "Below56",
        selfTest: 5,
        duration: "Below5",
        behaviour: "KeepCool",
      };
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
        
    });
    const result = await response.json();
    console.log(result)
    res.send(result);
})

app.listen(port, () => console.log(`Listening on port ${port}`));