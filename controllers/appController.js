var db = require('../models');
var Game = db.Game;

let appController = {
    index: function(req, res) {
        res.render('home');
    },

    game: function (req, res) {
        Game.findOrCreate({ where: { room_id: req.body.room_id, status: 'waiting'}, 
            defaults: { 
                    room_id: req.body.room_id, 
                    player1: req.body.username,
                }
        })
        .spread((dbData, created) => {

            if(created){
                var data = {
                    room_id: req.body.room_id,
                    name: req.body.username,
                    pattern: "O",
                    game_board: dbData.get("game_board"),
                    status: "waiting"
                }
                res.render('game', data);
            } else {                
                dbData.updateAttributes({
                    player2: req.body.username,
                    status: "playing"
                });     
                var data = {
                    room_id: req.body.room_id,
                    name: req.body.username,
                    player1: dbData.get("player1"),
                    pattern: "X",
                    game_board: dbData.get("game_board"),
                    status: "playing"
                } 
                res.render('game', data);                      
            }  
        })
    },
    
    isRoomFull: function(req, res) {
        Game.findOne({ where: {room_id: req.body.room_id, status: 'playing'} }).then(game => {
            if(game != null)
                res.json({"result": true, "data": game});
            else
                res.json({"result": false});
          })
    },

    changeBoard: function(req, res) {
        Game.findOne({ where: {room_id: req.body.room_id, status: 'playing'} }).then(game => {
            if(game != null){
                game.updateAttributes({
                    game_board: req.body.game_board,
                    round: game.get("round") + 1
                });
                res.json({"result": game});
            }
        })
    },

    getRoomInfo: function(req, res) {
        Game.findOne({ where: {room_id: req.body.room_id, status: 'playing'} }).then(game => {
            if(game != null){
                res.json({"result": game});
            } else{
                res.json({"error": true});
            }
        })
    },

    gameEnd: function(req, res) {
        Game.findOne({ where: {room_id: req.body.room_id, status: 'playing'} }).then(game => {
            if(game != null){
                game.updateAttributes({                    
                    status: "close"
                });
            }
            res.json({"result": "OK"});
        })
    },
  };
  module.exports = appController;