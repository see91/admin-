'use strict';

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  dialectOptions: {
    charset: 'utf8mb4',
  },
  database: 'trueglobal',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'mypassword1996',
  timezone: '+08:00',
};
