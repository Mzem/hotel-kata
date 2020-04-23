const { format, compareAsc, parseISO, differenceInDays } = require('date-fns')

module.exports = (checkinDate, checkoutDate, guestsCount, roomsRepository) => {

  const formattedCheckinDate = parseISO(
    format(new Date(checkinDate), 'yyyy-MM-dd')
  )
  const formattedCheckoutDate = parseISO(
    format(new Date(checkoutDate), 'yyyy-MM-dd')
  )
  const rooms = roomsRepository.getRooms()

  const stayDuration = differenceInDays(formattedCheckinDate, formattedCheckoutDate)

  if (stayDuration < 1){
    return "you should stay at least one night"
  }

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
