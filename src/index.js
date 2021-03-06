const roomsController = require('./controllers/roomsController')
const bookingController = require('./controllers/bookingController')

module.exports = {
  async searchRooms(checkinDate, checkoutDate, guestCount) {
    return await roomsController.findAvailableRooms(
      checkinDate,
      checkoutDate,
      guestCount
    )
  },
  bookRooms(checkinDate, checkoutDate, guestCount, roomNumber) {
    return bookingController.createBooking(
      checkinDate,
      checkoutDate,
      guestCount,
      roomNumber
    )
  },
}
