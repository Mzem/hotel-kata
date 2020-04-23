const { format, compareAsc, parseISO } = require('date-fns')

module.exports = (checkinDate, checkoutDate, guestsCount, roomsRepository) => {
  const formattedCheckinDate = parseISO(
    format(new Date(checkinDate), 'yyyy-MM-dd')
  )
  const formattedCheckoutDate = parseISO(
    format(new Date(checkoutDate), 'yyyy-MM-dd')
  )

  const rooms = roomsRepository.getRooms()

  const availableAndMatchingGuestCount = rooms.filter((room) => {
    if (room.capacity >= guestsCount && room.capacity !== undefined) {
      const formattedAvailableAt = parseISO(room.availableAt)
      if (compareAsc(formattedAvailableAt, formattedCheckinDate) === -1) {
        return true
      }
    }
    return false
  })
  return availableAndMatchingGuestCount
}
