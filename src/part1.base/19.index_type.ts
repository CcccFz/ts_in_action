let obj11 = {
    a: 1,
    b: 2,
    c: 3
}

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}
console.log(getValues(obj11, ['a', 'b']))
// console.log(getValues(obj11, ['e', 'f']))


// keyof
interface Obj {
    a: number
    b: string
}
let key: keyof Obj

// T[K]
let values: Obj['a']