/* БУЛЕВАЯ ЛОГИКА 

&&     |     true    | false 
ture   |     true    | false 
false  |     true    | false 


||     |     true    | false
true   |     true    | true
false  |     true    | false 


&& (и) true - если все значения true
|| (или) ture - если хоть одно значение true
! (нет) - инвертирует true или false 

*/


console.log (true && true)//true
console.log (false && true)//false 
console.log (true && !false)//true


console.log (true || false )//true
console.log (false || false)//false




// NEXT LESSON //

var currentYear = 2021
var carName = 'ford'
var carYear = 2011
var carAge = currentYear - carYear 

// Если возраст машины меньше 5 лет...
// Если возрст машины >= 5 лет и <= 10 лет ...
// иначе другое сооющение 


if (carAge <5) {
console.log(carName + ' младше 5 лет')
} else if (carAge >= 5 && carAge <= 10) {
console.log(carName + ' больше или равен 10 годам')
} else {
    console.log('Возраст' + ' ' + carName + ' равняется ' + carAge + ' ')
}



// false: 0  null   undefined  пустая строк ''   NaN ------> При этих значениях выводится FALSE 

//  var empty = ''

if (NaN) {
console.log ('Значение true')
} else {
    console.log ('Значение false')
}


console.log(typeof NaN)



// Теранарные операторы


var str = 'Hello'

if (4) {
    console.log('Значение true')
} else {
    console.log('Значение false')
}


4 ? console.log('Значение true') : console.log('Значение false') // теренарный оперетор
// (?) - if                  // (:) - else





// Пример //

var personAge = 25


if (personAge < 18) {
    messege = 'Человек не совершеннолетний'
} else {
    messege = ('WELCOME TO THE CLUB BUDY!')
}


 var messege = personAge < 18 ? 'Человек не совершеннолетний' : 'WELCOME TO THE CLUB BUDY!' // терренарный оператор  

console.log(messege)


//другой формат записи теренарных операторов 

/* var message = personAge < 18
?  'Человек не совершеннолетний'
:  'WELCOME TO THE CLUB BUDY!'
*/