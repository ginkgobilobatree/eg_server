const app = require("../app");
const port = process.env.PORT || 8000;

// const bodyParser = require('body-parser');
// app.use(bodyParser());

app.listen(port, () => console.log(`Listening on port ${port}`));
