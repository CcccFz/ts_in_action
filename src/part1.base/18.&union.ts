interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

let aaa: number | string = 1
let bbb: 'a' | 'b' | 'c' = 'a'


class Dog1 implements DogInterface {
    eat() {}

    run() {}
}
class Cat1  implements CatInterface {
    eat() {}

    jump() {}
}

enum Master {Boy, Girl}
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog1() : new Cat1()
    // pet.run()
    // pet.jump()
    pet.eat()
    return pet
}

interface Square {
    kind: 'square'
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}
interface Circle {
    kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size
        case 'rectangle':
            return s.height * s.width
        case 'circle':
            return Math.PI * s.radius ** 2
        default:
            return ((s: never) => {throw new Error(s)})(s)
    }
}
console.log(area({kind: 'circle', radius: 1}))
