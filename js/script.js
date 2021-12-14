var person = {
    name: 'Василий',
    year: 1990,
    family: ['Elena', 'Igor'],
    car: {
        year: 2010,
        model: 'Ford'
    },
    calculateAge: function(year) {
        var age = 2018 - this.year // = person
        console.log('Возраст ', age)
    }

}

console.log(person)
console.log(person.name)
console.log(person['year'])
var field = 'car'
console.log(person[field].year)

person.year = 1993 
console.log(person)



person.calculateAge()