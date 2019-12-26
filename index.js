const express = require('express');
const consign = require('consign');

const app = express();

consign()
  .then('src/db.js')
  .then('src/lib/middlewares.js')
  .then('src/bls')
  .then('src/routes')
  .then('src/lib/boot.js')
  .into(app)
module.exports = app