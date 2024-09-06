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

