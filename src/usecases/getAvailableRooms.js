module.exports = (checkinDate, checkoutDate, guestsCount, roomsRepository) => {
  const rooms = roomsRepository.getRooms()

  console.log(rooms)

  return 'BLABLA'
}
