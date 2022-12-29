(() => {
    "use strict";

    const express = require("express");
    const router = express.Router();
    const Middleware = require("./Middleware");

    router.post("/getRiskValues", Middleware.postData);

    module.exports = router;
})();