const { searchRooms, bookRooms } = require('../src/index')

describe('searchRooms', () => {
  it('SHOULD return stay one night message', async () => {
    const expectedResult = 'you should stay at least one night'
    const result = searchRooms('2020/05/20', '2020.05.20', 1)
    expect(result).toEqual(expectedResult)
  })
  it('SHOULD return available rooms', async () => {
    const expectedResult = [
      { number: '100', floor: '1', capacity: 1, availableAt: '2020-01-01' },
    ]
    const result = searchRooms('2020/05/20', '2020.05.30', 1)
    expect(result).toEqual(expectedResult)
  })
})

describe('bookRooms', () => {
  it('SHOULD return booking room not available message', async () => {
    const expectedResult = 'Cannot be booked: room 200 unavailable'
    const result = bookRooms('2020/05/20', '2020.05.30', 1, '200')
    expect(result).toEqual(expectedResult)
  })
  it('SHOULD return booked room', async () => {
    const expectedResult = {
      number: '100',
      floor: '1',
      capacity: 1,
      availableAt: '2020-01-01',
    }

    const result = bookRooms('2020/05/20', '2020.05.30', 1, '100')
    expect(result).toEqual(expectedResult)
  })
})
