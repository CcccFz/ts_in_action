abstract class Person {
    eat() {
        console.log('eat')        
    }
    abstract sleep(): void
}

class ManPerson extends Person {
    sleep() {
        console.log('man sleep') 
    }
}

class FemanPerson extends Person {
    sleep() {
        console.log('feman sleep') 
    }
}

const persons: Person[] = [new ManPerson(), new FemanPerson()]
persons.forEach(person => {
    person.eat()
    person.sleep()
})