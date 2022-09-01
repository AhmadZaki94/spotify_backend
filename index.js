const express = require('express');

require('dotenv').config();

const connect = require('./src/configs/db');

const artistController = require('./src/controllers/artist.controller');

const songController = require('./src/controllers/song.controller');

const userController = require('./src/controllers/user.controller');

const app = express();

app.use(express.json());

app.use("/artist", artistController);

app.use('/song', songController);

app.use('/user', userController);

app.listen(process.env.PORT || 5000, async function() {
    try{
        await connect();
        console.log("Listening on Port 5000");
    }
    catch(e){
        console.log(e.message);
    }
})