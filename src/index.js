module.exports = function() {
  const roomsController = require('./controllers/roomsController')

  console.log('Bienvenue !')

  const res = roomsController.findAvailableRooms(null, null, 1)

  console.log(res)
  console.log('Bye !')

  return res

}
