
'use strict'

var all = {
    sequelize:{
        username: 'root',
        password: '111111',
        database: 'test',
        host: "localhost",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: true,
            paranoid: true
        }
    }
};

module.exports = all;





