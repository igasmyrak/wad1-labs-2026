'use strict';

import logger from "../utils/logger.js";

const start = {
    createView(request, response) {
        logger.info("start page loading..");
        response.send("welcome to iga's playlist app");
    },
};

export default start;