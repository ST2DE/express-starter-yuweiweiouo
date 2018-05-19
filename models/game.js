'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    room_no: { type:DataTypes.INTEGER, primaryKey:true,autoIncrement:true },
    room_id: {type:DataTypes.STRING, allowNull:false},
    player1: {type:DataTypes.STRING, allowNull:false},
    player2: {type:DataTypes.STRING, allowNull:true},
    game_board: {type:DataTypes.STRING, defaultValue:'*********'},
    round:  { type:DataTypes.INTEGER, defaultValue: 0},
    status: {type:DataTypes.STRING, defaultValue:'waiting'}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Game;
};