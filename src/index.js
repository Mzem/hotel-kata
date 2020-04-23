module.exports = function () {
  const roomsController = require('./controllers/roomsController')

  const res = roomsController.findAvailableRooms('2020/05/20', '2020.05.30', 1)

  return res
}
