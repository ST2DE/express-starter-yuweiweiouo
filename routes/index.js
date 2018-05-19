const appController = require('../controllers/appController.js');

module.exports = function (app) {

  app.get('/', appController.index);
  app.get('/index', appController.index);
  app.post('/game', appController.game);
  app.post('/game/isRoomFull', appController.isRoomFull);
  app.post('/game/changeBoard', appController.changeBoard);
  app.post('/game/getRoomInfo', appController.getRoomInfo);
  app.post('/game/gameEnd', appController.gameEnd);
};