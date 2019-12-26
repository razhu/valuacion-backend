const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const config = require('../config/config');

module.exports = app => {

  console.log("verificando la configuracion", config.puerto);
  // Establece el puerto
  app.set("port", config.puerto);
  // Realiza el uso y configuracion de cors.
  app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: true,
    headers: 'Content-Type, Authorization, Content-Length, X-Requested-With',
  }));

  // Realiza el uso de "bodyParser" para la recepcion de Json como body.
  app.use(bodyParser.json());

  //para generar un espacio publico, archivos estaticos
  // app.use(express.static("public"));

  // verifica si hay errores en el formato json
  app.use((err, req, res, next) => {

    if (err instanceof SyntaxError) {
      res.status(400).json({
        mensaje: "Problemas en el formato JSON",
      });
    } else {
      res.status(500).send('Error interno!');
      console.error(err.stack);
    }
  });
};
