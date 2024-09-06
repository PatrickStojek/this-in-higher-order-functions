const objectToString = {
    firstName: 'Object',
    lastName: 'Stringified',
    toString: function() {
        let string = ''
        for(const property in this) {
            const value = this[property]
            if(typeof value === 'function') {
                continue
            }
            string = string + ' ' + value
        }
        return string
    }
}

console.log(objectStringify.toString())


///another implementation

const peopleObject = {
    '00001' : {name: 'Ala', age: 25},
    '00002' : {name: 'Ola', age: 21},
    '00003' : {name: 'Paweł', age: 29},
    '00004' : {name: 'Marcin', age: 41}
}
const peopleNames = {
    '00001' : 'Ala', 
    '00002' : 'Ola', 
    '00003' : 'Paweł',
    '00004' : 'Marcin'
}


const keys  = Object.keys(peopleObject)
const values = Object.values(peopleObject)
const entries = Object.entries(peopleObject)

const objectToArray = function(object, keyPropertyName = 'id') {
    const entries = Object.entries(object)
    return entries.map(entry => {
        const key = entry[0]
        const value = entry[1]
        value[keyPropertyName] = key 

        return value
    })
}