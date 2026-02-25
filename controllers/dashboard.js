'use strict';

import logger from "../utils/logger.js";


const dashboard = {
    createView(request, response) {
        logger.info("dashboard page loading..")


        const viewData = {
            title: "Playlist app dashboard"
        };

        response.render('dashboard', viewData);
    },
};

export default dashboard;