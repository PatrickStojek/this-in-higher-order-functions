const myOwnForEach = function(array, callback, thisArg) {
    for(let i = 0; i < array.length; i++) {
        const element = names[i];
        const index = i
        const array = names
        
        callback.call(thisArg, element, index, array)
    }
}

const names = ['Ola', 'Ala', 'Ela']
