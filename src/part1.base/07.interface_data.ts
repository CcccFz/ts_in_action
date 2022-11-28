interface ListRsp {
	items: Item[]
}

interface Item {
	readonly id: number
	name: string
	age?: number
}

function render(rsp: ListRsp) {
	rsp.items.forEach(item => {
		console.log(item.id, item.name, item.age);
	})
}

const rsp = {
	items: [
		{ id: 1, name: 'John', age: 5 },
		{ id: 2, name: 'Dava' },
	]
}

render(rsp)

interface StrArr {
	[x: number]: string
}
const arr: StrArr = ['a', 'b']

interface Names {
	[x: string]: any;
	[y: number]: number;
}