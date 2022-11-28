class Animal {
    // name: string
    age: number
    readonly legs: number = 4

    static type: string

    constructor(public name: string, age: number) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log('Animal eat')
    }
}

class Dog extends Animal {
    private pri() {}
    protected pro() {}

    constructor(name: string, age: number) {
        super(name, age)
    }
}

const dog = new Dog("", 1)
Dog.type = "dss"
console.log(Dog.type)
