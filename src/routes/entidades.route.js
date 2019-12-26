module.exports = app => {
  app.route('/entidaes/contrastacion')
    .get(async (req, res) => {
      const result = await app.src.bls.entidades.contrastarNit();
      res.status(200).json({
        finalizado: true,
        datos: result
      });
    });   
};
