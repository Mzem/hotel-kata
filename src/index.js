const roomsController = require('./controllers/roomsController')

console.log('Bienvenue !')

const res = roomsController.findAvailableRooms(null, null, null)

console.log(res)

console.log('Bye !')
