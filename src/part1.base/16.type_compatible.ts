let s: string = ''
// s = null

// 接口兼容 (少兼容多)
interface X {
    a: any
    b: any
}

interface Y {
    a: any
    b: any
    c: any
}
let x: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
x = y
// y = x

// 类兼容 (少兼容多)
class A {
    constructor(p: number, q: number) {}
    id: number = 1
    // age: number = 1
    // private name: string = ''
}
class B {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    // private name: string = ''
}
let aa = new A(1, 2)
let bb = new B(1)
aa = bb
bb = aa

// 枚举兼容
enum Fruit {Apple, Banana}
enum Color {Red, Yellow}
let fruit: Fruit.Apple = 1
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple

// 泛型兼容
interface Empty<T> {
    // v: T
}
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};
obj1 = obj2

let log11 = <T>(x: T): T => {
    console.log('x')
    return x
}
let log22 = <U>(y: U): U => {
    console.log('y')
    return y
}
log11 = log22

// 函数兼容 (多兼容少)
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}

const handler1 = (a: number) => {}
const handler2 = (a: number, b: number, c: number) => {}
hof(handler1)
// hof(handler2)

let aFn = (p1: number, p2: number) => {}
let bFn = (p1?: number, p2?: number) => {}
let cFn = (...args: number[]) => {}
aFn = bFn
aFn = cFn
cFn = aFn
cFn = bFn
// bFn = aFn
// bFn = cFn

const handler3 = (a: string) => {}
// hof(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
// p2d = p3d

let f = () => ({name: 'Alice'})
let g = () => ({name: 'Alice', location: 'Beijing'})
f = g
// g = f

function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}