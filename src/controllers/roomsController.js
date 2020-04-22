const getAvailableRooms = require('../usecases/getAvailableRooms')
const RoomsRepository = require('../repositories/roomsRepository')

module.exports = {
  findAvailableRooms(checkinDate, checkoutDate, guestsCount) {
    const roomsRepository = new RoomsRepository()

    return getAvailableRooms(
      checkinDate,
      checkoutDate,
      guestsCount,
      roomsRepository
    )
  },
}
