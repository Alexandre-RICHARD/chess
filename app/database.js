const {
    Sequelize
  } = require('sequelize');
  
  const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
      underscored: true,
      timestamps: false
    },
    logging: false
  });
  
  module.exports = sequelize;