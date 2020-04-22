const { format, formatDistance, formatRelative, subDays } = require('date-fns')

module.exports = (checkinDate, checkoutDate, guestsCount, roomsRepository) => {
  const rooms = roomsRepository.getRooms()

  const availableAndMatchingGuestCount = rooms.filter((room) =>
  room.capacity >= guestsCount && room.capacity !== undefined)
  return availableAndMatchingGuestCount
}
