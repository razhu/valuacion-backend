module.exports = app => {
  app.route('/api/v1/ciudadanos/:id')
  .get(async (req, res) => {
    const result = await app.src.bls.ciudadano.buscarCiudadano(req.params.id);
    res.status(200).json({
        finalizado: true,
        datos: result,
    });
  });
}