const { format, parseISO, differenceInDays } = require('date-fns')

const isAvailableRoomAtCheckinDate = require('../services/isAvailableRoomAtCheckinDate')

module.exports = (
  checkinDate,
  checkoutDate,
  guestsCount,
  roomNumber,
  roomsRepository
) => {
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

  const room = roomsRepository.getRoom(roomNumber)

  if (isAvailableRoomAtCheckinDate(room, formattedCheckinDate, guestsCount)) {
    // TODO use booking repo to save booking
    // TODO use room repo to update room availableAt date with checkoutDate
    return room
  }
  return `Cannot be booked: room ${roomNumber} unavailable`
}
