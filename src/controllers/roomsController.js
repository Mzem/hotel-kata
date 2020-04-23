const getAvailableRooms = require('../usecases/getAvailableRooms')
const RoomsRepository = require('../repositories/roomsRepository')
const RoomsFileSystemRepository = require('../repositories/roomsFileSystemRepository')

module.exports = {
  findAvailableRooms(checkinDate, checkoutDate, guestsCount) {
    const roomsRepository = new RoomsRepository()
    const roomsFileSystemRepository = new RoomsFileSystemRepository()

    return getAvailableRooms(
      checkinDate,
      checkoutDate,
      guestsCount,
      roomsFileSystemRepository
    )
  },
}
