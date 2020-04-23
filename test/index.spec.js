const index = require('../src/index')
describe('mon test', () => {
  it('SHOULD ok', async () => {
    const expectedResult = "you should stay at least one night"
    const result = index()
    expect(result).toEqual(expectedResult)
  })
})
