const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('./config/config');

let db = null;
module.exports = app => {
  if (!db) {
    const sequelize = new Sequelize(config.adapter);

    db = {
      sequelize,
      Sequelize,
      models: {},
    };

    const dir = path.join(__dirname, 'models');
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file);
        const model = sequelize.import(modelDir);
        console.log("----> " + model);
        db.models[model.name] = model;
    });
    console.log('cargando asociaciones....');
    Object.keys(db.models).forEach(key => {
      console.log(`----> ${key+db.models[key]}`);
      // Control de relaciones(associate) de los modelos.
      if (db.models[key].associate != undefined) {
        db.models[key].associate(db.models);
      }
    });

  }
  return db;
};
