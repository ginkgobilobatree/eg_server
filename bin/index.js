const app = require("../app");
const port = process.env.PORT || 8000;

// const mongoose = require("mongoose");

// const bodyParser = require('body-parser');
// app.use(bodyParser());

/* mongoDB start */

// mongoose.connect(
//   `mongodb+srv://${process.env.USERNAME1}:${process.env.PASSWORD1}@cluster0.l4buj0l.mongodb.net/?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// ).then(() => console.log("connected to mongoDB"));

// const riskValuesSchema = new mongoose.Schema({
//   yin: { type: Number, required: true },
//   yang: { type: Number, required: true },
//   return: { type: Number, required: true },
//   volatility: { type: Number, required: true },
// });

// const userDataSchema = new mongoose.Schema({
//   calculatedRiskRate: { type: Number, required: true },
//   riskValues: riskValuesSchema,
// });

/* mongoDB end*/

app.listen(port, () => console.log(`Listening on port ${port}`));
