module.exports = (sequelize, DataType) => {
  const extracto = sequelize.define('extracto', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    consulta: {
      type: DataType.STRING(500),    
    },
    fecha: {
      type: DataType.DATEONLY,    
    },
    sec: {
      type: DataType.STRING(500),    
    },
    nro_comporobante: {
      type: DataType.INTEGER,    
    },
    cod_operacion: {
      type: DataType.STRING(100),    
    },
    nro_documento: {
      type: DataType.STRING(100),    
    },
    glosa: {
      type: DataType.TEXT,    
    },
    cuenta_transf: {
      type: DataType.STRING(100),    
    },
    debito: {
      type: DataType.NUMERIC,    
    },
    credito: {
      type: DataType.NUMERIC,    
    },
    saldo: {
      type: DataType.NUMERIC,    
    },
    importe_conciliar: {
      type: DataType.NUMERIC,    
    },
    estado: {
      type: DataType.STRING(100),    
    }
  }, {
    tableName: 'extracto',
    timestamps: false    
  });
  return extracto;
};
