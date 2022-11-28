// const add: (x: number, y: number) => number
// interface add {
//     (x: number, y: number): number
// }

type Add = (x: number, y: number) => number
const add: Add = (x, y) => x + y

interface Lib {
	(): void
	ver: string
	do(): void
}

const getLib: () => Lib = () => {
	const lib: Lib = () => { console.log('lib init') }
	lib.ver = '1.0'
	lib.do = () => { console.log('lib do') }
	return lib
}

const lib1: Lib = getLib()
lib1()
lib1.do()