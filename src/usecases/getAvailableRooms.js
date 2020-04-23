const { format, compareAsc } = require('date-fns')

module.exports = (checkinDate, checkoutDate, guestsCount, roomsRepository) => {
  const formattedCheckinDate = format(new Date(checkinDate), 'YYYY-MM-DD')
  const formattedCheckoutDate = format(new Date(checkoutDate), 'YYYY-MM-DD')

  if (
    formattedCheckinDate == 'Invalid Date' ||
    formattedCheckoutDate == 'Invalid Date'
  ) {
    return null
  }

  const rooms = roomsRepository.getRooms()

  const availableAndMatchingGuestCount = rooms.filter((room) => {
    if (room.capacity >= guestsCount && room.capacity !== undefined) {
      if (compareAsc(room.availableAt, checkinDate) === -1) {
        return true
      }
    }
    return false
  })
  return availableAndMatchingGuestCount
}
