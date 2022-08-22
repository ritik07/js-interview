// Create a function that accepts two inputs(name and age) and returns an object.Let's call this function makePerson.

const createPerson = (name, age) => {
    let user = {}
    user.name = name
    user.age = age
    return user
}

// console.log(createPerson("Ritik", 23))

// Inside personStore object, create a property greet where the value is a function that logs "hello".

const personStore = {
    fn: () => {
        console.log("Hello");
    }
}

// personStore.fn()


//class
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet = () => {
        console.log('hello');
    }
}


//------------------------------------------------------------------------------//
var userFunctionStore = {
    sayType: function () {
        console.log(`I am a ${this.type}`);
    }
}

const userFactory = (name, score) => {
    const user = Object.create(userFunctionStore);
    user.type = 'User';
    user.name = name;
    user.score = score;

    return user;
}

const adminFunctionStore = Object.assign({}, userFunctionStore);

const adminFactory = (name, score) => {
    const admin = Object.create(adminFunctionStore);
    admin.type = 'Admin';
}

adminFunctionStore.sharePublicMessage = function () {
    console.log('Welcome users!');
}

console.log(userFactory('ritik', 23))
