/*
Number - числа
String - строчка
Boolean - содержит в себе только 2 типа данных (False) or (True)
Object - самый основной тип данных 
Null
Undefined 
*/



var number = 42
var string = 'Message'
var isTrue = true // false
var obj = {a: 1}
var isNull = null
var undef =  undefined


console.log(number)
console.log(typeof number)

console.log(string)
console.log(typeof string)

console.log(isTrue)
console.log(typeof isTrue)

console.log(obj)
console.log(typeof obj)

console.log(isNull)
console.log(typeof isNull) //При определении типа данных для типа Null - выводится Object - небольшая не точность в языке

console.log(undef)
console.log(typeof undef)

//оператор typeof определяет тип данных 



// next lesson//


 //NUMBER START


var num1 = 12
var num2 = 8


// можно выполнить замену данных переменной путём обращения к ней по её имени 
num2 = 2 // Таким образом произошла заменна данных в переменной var num2 
//

console.log('+:',num1 + num2) //оператор (+) выполняет действие сложения

console.log('-:',num1 - num2) //оператор (-) выполняет действие вычетания

console.log('*:',num1 * num2) //оператор (*) выполняет действие умножения

console.log('/:',num1 / num2) //оператор (/) выполняет действие деления

//NUMBER END


// STRING START

var str1 = 'Hello'
var str2 = 'World'



console.log('+:', str1 + str2) // Это действие называется конкатенация  (JavaScript метод concat() используется для объединения двух, или более строк в одну, при этом метод не изменяет существующие строки, а возвращает новую строку.) Скопированно из сети....


// console.log('+:', str1 + str2) при выполнение данной операции выводится HelloWorld тк, произошла конкатенация и чтобы добавить пробел межлу словами нужно добавить ещё одну строку ('') и внутри строчки в качестве символа поставить пробел (' ')

console.log('+:', str1 + ' ' + str2)

console.log('1+2:', + 1 + '2')  // если испл number в '' то js будет видеть его как объект конкатенации 


console.log('Boolean + string:', true + str2)// выводит в консоль tureWorld
console.log('Boolean + string:', false + str1)// выводит falseHello

console.log('Boolean + number:', true + 1)//2
console.log('Boolean + number:', false + 1)//1
console.log('Boolean + number:', true - 1)//0
console.log('Boolean + number:', false - 1)//-1

