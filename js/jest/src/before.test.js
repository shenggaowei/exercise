const { forEach } = require('./before')

beforeEach(() => {
    console.log('beforeEach')
})

describe('test group1', () => {
    beforeEach(() => {
        console.log('group1 beforeEach')
    })
    test('ce shi 1', () => {
        expect(2 + 2).toBe(4)
    })
})

describe('mock function', () => {
    const mockCallback = jest.fn(x => 42 + x)
    forEach([0, 1], mockCallback)

    expect(mockCallback.mock.calls.length).toBe(2)

    expect(mockCallback.mock.calls[0][0]).toBe(0)

    expect(mockCallback.mock.calls[1][0]).toBe(1)

    expect(mockCallback.mock.results[0].value).toBe(42)
})