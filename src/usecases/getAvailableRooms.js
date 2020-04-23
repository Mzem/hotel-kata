const { format, parseISO, differenceInDays } = require('date-fns')

const isAvailableRoomAtCheckinDate = require('../services/isAvailableRoomAtCheckinDate')

module.exports = (checkinDate, checkoutDate, guestsCount, roomsRepository) => {
  const formattedCheckinDate = parseISO(
    format(new Date(checkinDate), 'yyyy-MM-dd')
  )
  const formattedCheckoutDate = parseISO(
    format(new Date(checkoutDate), 'yyyy-MM-dd')
  )

  const stayDuration = differenceInDays(
    formattedCheckinDate,
    formattedCheckoutDate
  )

  if (Math.abs(stayDuration) < 1) {
    return 'you should stay at least one night'
  }

  const rooms = roomsRepository.getRooms()

  const availableAndMatchingGuestCount = rooms.filter((room) =>
    isAvailableRoomAtCheckinDate(room, formattedCheckinDate, guestsCount)
  )
  return availableAndMatchingGuestCount
}
