import math from '../math'

test('1+1=2', () => {
    expect(math.add(1, 1)).toBe(2)
})

test('1+2=-1', () => {
    expect(math.sub(1, 2)).toBe(-1)
})

// const a11: string = 1