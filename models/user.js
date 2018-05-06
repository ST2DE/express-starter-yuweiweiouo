'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    account: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};
