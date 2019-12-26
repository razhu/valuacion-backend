module.exports = (sequelize, DataType) => {
  const entidad = sequelize.define('entidades', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },
    glosa: {
      type: DataType.STRING(500),
      allowNull: false
    },
    tipo: {
      type: DataType.STRING(100),
      allowNull: false
    },
    nit_numero: {
      type: DataType.STRING(100)
    },
    tipo_numero: {
      type: DataType.STRING(100)
    },
    razon_social_contrastacion: {
      type: DataType.STRING(500)
    },
    estado: {
      type: DataType.STRING(100)
    }
  }, {
    tableName: 'entidades',
    timestamps: false
  });
  return entidad;
};
