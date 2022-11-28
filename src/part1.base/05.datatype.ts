// 原始类型
const bool: boolean = true
let num: number = 123
const str: string = "abc"
console.log(bool)
console.log(num)
console.log(str)

// 数组
const arr1: number[] = [1, 2, 3, 4, 5]
const arr2: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arr1)
console.log(arr2)

// 元组
const tup: [number, string] = [1, "a"]
console.log(tup)
tup.push(2)
console.log(tup)

// 函数
// const add1 = (x: number, y: number) => x+y
// const add2 = (x: number, y: number): number => x+y
const compute: (x: number, y: number) => number = (a, b) => a + b

// 对象
const obj: { x: number, y: number } = { x: 1, y: 2 }
// obj.z = 3

// symbol
const s1: symbol = Symbol()
const s2 = Symbol()
console.log(s1 === s2);

// none
const un: undefined = undefined
const nu: null = null

// void 
const noReturn = () => { }

// any
let x1
x1 = 1
x1 = []
x1 = () => { }

// never
// const ne: number & string
const error = () => {
	throw new Error("有错误")
}
// console.log(error());
const endless = () => {
	while (true) { }
}
// console.log(endless());