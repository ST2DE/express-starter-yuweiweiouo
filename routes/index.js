const taskController = require('../controllers/taskController.js');

module.exports = function (app) {

  app.get('/tasks', taskController.index);
  app.get('/api/tasks', taskController.indexApi);
  app.get('/login', taskController.login);
  app.post('/user', taskController.user);
};