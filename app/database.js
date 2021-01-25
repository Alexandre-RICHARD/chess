const {
    Sequelize
} = require('sequelize');

//   Configuration de sequelize
const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true,
        timestamps: false
    },
    logging: false //? logging false pour pas être harcelé
});

module.exports = sequelize;