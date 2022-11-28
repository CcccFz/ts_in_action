interface Human {
    name: string
    eat(): void
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }
    name: string
    age?: number
    eat() {}
    sleep() {}
}

interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {}

const boy: Boy = {
    name: '',
    eat() {},
    run() {},
    cry() {},
}



class Auto {
    state = 1
    // private state2 = 1
}

interface AutoInterface extends Auto {}
class C implements AutoInterface {
    state: number = 1
}

class Bus extends Auto implements AutoInterface {}