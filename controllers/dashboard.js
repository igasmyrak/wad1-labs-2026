'use strict';

import logger from "../utils/logger.js";
import playlistStore from '../models/playlist-store.js';
import { v4 as uuidv4 } from 'uuid';
import playlist from "./playlist.js";


const dashboard = {
    createView(request, response) {
        logger.info("dashboard page loading..")


        const viewData = {
            title: "Playlist app dashboard",
            playlists: playlistStore.getAllPlaylists()
        };

        logger.debug(viewData.playlists);
        
        response.render('dashboard', viewData);
    },

    addPlaylist(request, response) {
        const timestamp = new Date();

        const newPlaylist = {
            id: uuidv4(),
            title: request.body.title,
            date: timestamp,
            songs: [],
        };
        playlistStore.addPlaylist(newPlaylist);
        response.redirect('/dashboard');
    },

    deletePlaylist(request, response) {
        const playlistId = request.params.id;
        logger.debug(`Deleting playlist ${playlistId}`);
        playlistStore.removePlaylist(playlistId);
        response.redirect("/dashboard");
    },

    
};

export default dashboard;