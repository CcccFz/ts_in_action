const a = 1
const b = [1, 'a']
const c = {x: 1, y: 'c'}
const d = (x = 1) => x + 1

window.onkeydown = (event) => {
    console.log(event)
}



interface Foo {
    bar: number
}

const fooo: Foo = {} as Foo
fooo.bar = 1