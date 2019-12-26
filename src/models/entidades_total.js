module.exports = (sequelize, DataType) => {
  const entidad = sequelize.define('entidades_total', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },
    glosa: {
      type: DataType.STRING(100),
      allowNull: false
    },
    codigo: {
      type: DataType.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'entidades_total',
    timestamps: false
  });
  return entidad;
};
