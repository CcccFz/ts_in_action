function logg<T> (v: T): T {
    console.log(v)
    return v
}

logg<number[]>([1, 2, 3])
logg<string[]>(['a', 'b', 'c', 'd', 'e', 'f'])
logg(['a', 'b', 'c'])

// type Log = <T>(v: T) => T
// const myLog: Log = logg

class Log<T> {
    run(v: T) {
        console.log(v)
        return v
    }
}
const log1 = new Log<number>()
log1.run(1)
const log2 = new Log()
log2.run({a: 1})
log2.run('')


interface Length {
    length: number
}
function logAdvance<T extends Length>(v: T): T {
    console.log(v, v.length)
    return v    
}
// logAdvance(1)
logAdvance('123')
logAdvance([1,2])
logAdvance({length: 3})
