module.exports = app => {
  // contrastar datos de personas
  app.route('/personas/contrastacion')
  .post(async (req, res) => {
    const result = await app.src.bls.personas.contrastar(req.body);
    console.log(' el result ', result);
    if (result) { // existe persona
        res.status(200).json({
            finalizado: true,
            datos: result
          });
    } else {
        res.status(200).json({
            finalizado: false
          });
    }
  });    
  };
  