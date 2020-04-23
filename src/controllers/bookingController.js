const bookRoom = require('../usecases/bookRoom')
const RoomsRepository = require('../repositories/roomsRepository')

module.exports = {
  createBooking(checkinDate, checkoutDate, guestsCount, roomNumber) {
    const roomsRepository = new RoomsRepository()

    return bookRoom(
      checkinDate,
      checkoutDate,
      guestsCount,
      roomNumber,
      roomsRepository
    )
  },
}
