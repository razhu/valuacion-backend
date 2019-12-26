const rp = require('request-promise');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
module.exports = app => {
  const contrastarNit = async () => {
    const lista = await app.src.db.models.entidades.findAll({
      where: {
        tipo: 'NIT'
      }
    });
    console.log('------------------', lista);
    for (let e of lista) {
      let rs = await rp({
        method: 'GET',
        uri: `http://pbdw.impuestos.gob.bo:8080/gob.sin.padron.servicio.web/consulta/verificarContribuyente?nit=${e.nit_numero}`
      });
      rs = JSON.parse(rs);
      console.log('------------------------------------');
      console.log(rs);
      console.log('------------------------------------');
      await e.update({
        razon_social_contrastacion: rs.razonSocial ? rs.razonSocial : 'NO_ENCONTRADO',
        estado: rs.estado
      });
    }
    return 'ok';
  };
  return {
    contrastarNit
  };
};
