var db = require('../models');
var Task = db.Task;
var User = db.User;

let taskController = {
  index: function (req, res) {
    Task.findAll()
    .then(function (tasks) {
      res.render('index', {"tasks": tasks});
    });
  },
  indexApi: function (req, res) {
    Task.findAll()
    .then(function (tasks) {
      res.json(tasks);
    });
  },
  user: function (req, res) {
    if(req.body.action == "create"){
      User.findOrCreate({ where: { username: req.body.username }, defaults: { password: req.body.password } })
      .spread((user, created) => {
        console.log(user.get({
          plain: true
        }))
        console.log(created)
      })

      return res.redirect('/tasks');
    };

    if(req.body.action == "create"){
    }

 },
  login: function(req, res) {
      res.render('login');
  }
  };
  module.exports = taskController;