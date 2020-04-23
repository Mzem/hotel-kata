const fs = require('fs')
const path = require('path')
const filename = path.join(__dirname, '../rooms.json')

module.exports = class {
  async getRooms() {
    const content = fs.readFileSync(filename)

    return JSON.parse(String(content)).rooms
  }
}
