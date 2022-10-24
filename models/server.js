const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();

        this.paths = {
            datosCSV: '/api'
        }

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express());

        this.app.use(express.urlencoded({ extended: true}));

    }

    routes(){
        this.app.use(this.paths.datosCSV, require('../routes/datos'));
    }

    listen(){
        this.app.listen(3001, () => {
            console.log('Servidor corriendo en el puerto: ', 3001);
        })
    }
}


module.exports = Server;