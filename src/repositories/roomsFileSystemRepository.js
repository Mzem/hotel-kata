const ROOMS = [
  { number: '100', floor: '1', capacity: 1, availableAt: '2020-01-01' },
  { number: '200', floor: '2', capacity: 2, availableAt: '2020-05-25' },
]

module.exports = class {
  getRooms() {
    return ROOMS
  }
  getRoom(roomNumber) {
    return ROOMS.find((room) => room.number === roomNumber)
  }
  book(roomNumber, checkOutDate) {
    let updatedRoom
    ROOMS.forEach((room, index) => {
      if (room.number === roomNumber) {
        ROOMS[index].availableAt = checkOutDate
        updatedRoom = ROOMS[index]
      }
    })
    return updatedRoom
  }
}
