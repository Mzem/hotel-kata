const index = require('../src/index')
describe('mon test', () => {
  it('SHOULD ok', async () => {
    const expectedResult = [
      { number: '100', floor: '1', capacity: 1, availableAt: '2020-01-01' },
    ]
    const result = index()
    expect(result).toEqual(expectedResult)
  })
})
