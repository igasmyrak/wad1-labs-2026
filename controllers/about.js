'use strict';

import logger from "../utils/logger.js";
import empStore from "../models/emp-store.js";

const about = {
    createView(request, response) {
        logger.info("About page loading");

        const viewData = {
            employee: empStore.getAppInfo()
        };

        //logger.debug(viewData);
        response.render('about', viewData);
    },
};

export default about;