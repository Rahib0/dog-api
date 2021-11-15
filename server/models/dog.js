const dogData = require("../data")

class Dog {
    constructor(data) {
        this.id = data.id
        this.name = data.name;
        this.age = data.age; 
    }

    static findByid(id) {
        const dogData = dogData.filter((dog) => dog.id === id)[0];
        if (!dogData) {
            return;
        }
        const dog = new Dog(dogData);
        return dog;
    }

    static get all() {
        const dogs = dogData.map((dog) => new Dog(dog));
        return dogs;
    }

}

module.exports = Dog