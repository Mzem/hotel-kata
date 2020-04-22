const index = require('../src/index')
describe('mon test', () => {
  it('SHOULD ok', async () => {
    const result = index();
    expect(result).toEqual(   [
      { number: '100', floor: '1', capacity: 1, availableAt: '2020-01-01' },
      { number: '200', floor: '2', capacity: 2, availableAt: '2020-04-25' }
    ])
  })
})
