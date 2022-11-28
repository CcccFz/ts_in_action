// 函数定义
function add1(x: number, y: number) {
    return x+y
}

let add2: (x: number, y: number) => number
type add3 = (x: number, y: number) => number
interface add4 {
    (x: number, y: number): number
}

function add5(x: number, y?: number) {
    return y ? x+y : x
}
console.log(add5(1));

function add6(x: number, y: number = 0, z: number, q: number = 1) {
    return x+y+z+q
}
console.log(add6(1, undefined, 1));

function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((x, y) => x+y)
}
add7(1,2,3,4,5)

function add8(...rest: any[]) {
    if (typeof rest[0] === 'string') {
        return rest.join('')
    }
    if (typeof rest[0] === 'number') {
        return rest.reduce((x,y) => x+y)
    }
}
console.log(add8(1,2,3))
console.log(add8('1','2','3'))
