var carName = 'Ford'
var carYear = 2010
var personYear = 1990

function calculateAge (year) {
    var currentYear = 2021  
    var result = currentYear - year 
    return result
}

// function checkAndLogAge (year) {
//     if (calculateAge(year) <= 10) {
//         console.log('Возраст меньше 10 лет')
//     } else {
//         console.log('Возраст больше 10 лет')
//     }
// }

// checkAndLogAge(carYear)
// checkAndLogAge(personYear)

    // if (calculateAge(carYear) <= 10) {
    //     console.log('Возраст меньше 10 лет')
    // } else {
    //     console.log('Возраст больше 10 лет')
    // }


    // if (calculateAge(personYear) <= 18) {
    //     console.log('Человек не может водить машину')
    //         } else {
    //             console.log('Человек может водить машину')
    //         } 


 // TASK-1 //


 function checkAndLogAge (year, name, compareTo){
    if (calculateAge(year) < compareTo){
        console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
    } else {
        console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
    }
 }


checkAndLogAge(carYear, 'Машины', 8)
checkAndLogAge(personYear, 'Человека', 30)



// Спосбы вызова функций //

// 1 вариант


function sayHelloTo(name){
    console.log('Привет, ' + name)
}

sayHelloTo('Антон')



// 2 вариант  (Сама переменная становится функцией)



var sayHelloTo = function (name) {
    console.log('Hallo, ' + name)
}

sayHelloTo('Anton')