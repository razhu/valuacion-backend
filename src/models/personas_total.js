module.exports = (sequelize, DataType) => {
  const persona = sequelize.define('personas_total', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    },
    nombres: {
      type: DataType.STRING(100),
      allowNull: false
    },
    primer_apellido: {
      type: DataType.STRING(100)
    },
    segundo_apellido: {
      type: DataType.STRING(100)
    },
    tipo_documento: {
      type: DataType.ENUM,
      values: ['CI', 'PASAPORTE', 'EXTRANJERO'],
      defaultValue: 'CI',
      allowNull: false
    },
    nro_documento: {
      type: DataType.STRING(50),
      allowNull: false,
      unique: true
    },
    complemento: {
      type: DataType.STRING(2)
    },
    fecha_nacimiento: {
      type: DataType.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'personas_total',
    timestamps: false
  });
  return persona;
};
