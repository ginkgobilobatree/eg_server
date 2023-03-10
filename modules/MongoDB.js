(() => {
  "use strict";
  const mongoose = require("mongoose");
  require("dotenv").config();

  mongoose
    .connect(
      `mongodb+srv://${process.env.USERNAME1}:${process.env.PASSWORD1}@cluster0.l4buj0l.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("connected to mongoDB"))
    .catch((err) => console.log(err));

  const riskValuesSchema = new mongoose.Schema({
    yin: { type: Number, required: true },
    yang: { type: Number, required: true },
    return: { type: Number, required: true },
    volatility: { type: Number, required: true },
  });

  const userDataSchema = new mongoose.Schema({
    timestamp: { type: Number, required: true },
    calculatedRiskRate: { type: Number, required: true },
    riskValues: riskValuesSchema,
  });

  const UserData = mongoose.model("UserData", userDataSchema);

  async function storeInMongoDB(timestamp, reqBody) {
    const userD = new UserData({
      timestamp: timestamp,
      calculatedRiskRate: reqBody.userData.calculatedRiskRate,
      riskValues: {
        yin: reqBody.userData.riskValues.yin,
        yang: reqBody.userData.riskValues.yang,
        return: reqBody.userData.riskValues.return,
        volatility: reqBody.userData.riskValues.volatility,
      },
    });
    userD
      .save()
      .then(() => console.log("One entry added"))
      .catch((err) => console.log(err));
  }

  async function retrieveFromMongoDB(timestamp, res) {
    //hier müssten noch headers neu gesetzt werden, da wegen eines manchmal auftretenden Errors der server crashed
    // => Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    await UserData.find(timestamp, (err, found) => {
      if (found) {
        res.send(found[0]); //Daten werden aus DB als array geliefert
        return found;
      }
      return err;
    })
      .clone()
      .catch((err) => console.log("Error occured, " + err));
  }

  module.exports = { storeInMongoDB, retrieveFromMongoDB };
})();
