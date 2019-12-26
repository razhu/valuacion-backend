const http = require('http');

module.exports = app => {
  if (process.env.NODE_ENV !== "test") {
    app.src.db.sequelize.sync().done(() => {
      if (process.env.FORCE || false) {
        console.log("------------BASE DE DATOS CREADA--------------");
        process.exit(0);
      } else {
        const server = app.listen(app.get("port"), () => {
          console.log(`Iniciando servidor en el puerto ${app.get('port')} `);
        });
      }
    });
  } else {
    app.src.db.sequelize.sync().done(() => {
      console.log("------------BASE DE DATOS CREADA--------------");
      if (process.env.FORCE || false)
        process.exit(0);
    });
  }
};
