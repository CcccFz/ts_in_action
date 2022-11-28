export {}

interface A {
    x: number
    foo(bar: number): number
    foo(bar: 'a'): string
}
interface A {
    y: number
    foo(bar: string): string
    foo(bar: string[]): string[]
    foo(bar: 'b'): string
}

const a1: A = {
    x: 1,
    y: 1,
    foo(bar: any) {
        return bar
    }
}

class Cc {}
namespace Cc {
    export let state = 1
}
console.log(Cc.state)

function Lib() {}
namespace Lib {
    export let ver = '1.0'
}
console.log(Lib.ver)

enum Color {
    Red,
    Yellow,
    Blue
}

namespace Color {
    export function mix() {}
}
console.log(Color);
