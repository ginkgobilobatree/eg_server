(() => {
    "use strict";

    const express = require("express");
    const router = express.Router();
    const Middleware = require("./Middleware");

    router.post("/getRiskValues", Middleware.postData);
    router.post("/storeUserData", Middleware.storeData);

    module.exports = router;
})();