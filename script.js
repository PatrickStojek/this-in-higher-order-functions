console.log('Hello world!')
const myOwnForEach = function(array, callback, thisArg) {
    for(let i = 0; i < array.length; i++) {
        const element = names[i];
        const index = i
        const array = names
        
        callback.call(thisArg, element, index, array)
    }
}

const names = ['Ola', 'Ala', 'Ela']

window.myName = 'Patryk'

const greeter = function (name, index, array) {
    console.log('Hello ' + name + ' I\'m ' + this.myName)
}

names.forEach(greeter)
myOwnForEach(names, greeter)

