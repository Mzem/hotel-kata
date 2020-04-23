const { compareAsc, parseISO } = require('date-fns')

module.exports = (room, formattedCheckinDate, guestsCount) => {
  if (room.capacity >= guestsCount && room.capacity !== undefined) {
    const formattedAvailableAt = parseISO(room.availableAt)
    if (compareAsc(formattedAvailableAt, formattedCheckinDate) === -1) {
      return true
    }
  }
  return false
}
