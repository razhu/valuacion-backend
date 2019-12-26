const moment = require('moment');
module.exports = app => {
  const contrastar = async (datos) => {
    console.log('JJJJ datos ', datos);
try {
  let persona = await app.src.db.models.personas_total.findOne({
    where: {
      numero_documento: datos.numero_documento,
      nombres: datos.nombres,
      primer_apellido: datos.primer_apellido,
      segundo_apellido: datos.segundo_apellido,
      fecha_nacimiento: moment(datos.fecha_nacimiento, 'YYYY-MM-DD').format('YYYY-MM-DD'), // 1997-10-01
      complemento: datos.complemento
      // tipo_documento: datos.tipo_documento,
      // estado_verificacion: datos.estado_verificacion,
      // estado_segip: datos.estado_segip,        
    }
  });
  return persona;
} catch (error) {
  console.log(error);
  return error
}
    
  };
  return {
    contrastar
  };
};
