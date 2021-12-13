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



// Оператор '=' выполняет функцию присвоения  

// NEXT LESSON

/* Приоритет операций */

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


var result = 12 - 6 / 3 // 10
var result2 = 3 + 4 * 2 // 11

console.log('12 - 6 / 3:', result)
console.log('3 + 4 * 2:', result2)




var isGreater = 20 - 6 * 3 >= 4 // 20 - 6 * 3 = 2  
var isGreater2 = 18 + 100 / 2 >= 25 // 18 + 100 / 2 = 68
/* Приоритетность:
var isGreater2 = 18 + 100 / 2 >= 25
               3    13    14  11
               3 - ОПЕРАТОР ПРИСВАИВАНИЯ
               13 - ОПЕРАТОР СЛОЖЕНИЯ
               14 - ОПЕРАТОР ДЕЛЕНИЯ
               11 - ОПЕРАТОР СРАВНЕНИЯ
*/
console.log('20 - 6 * 3 >= 4',isGreater)  // false 2 < 4
console.log('18 + 100 / 2 >= 25',isGreater2)  // true 68 > 25


// Пример 
var result3 = (22 + 48 + 100) / 2  // (22 + 48 + 100) = 170   170 / 2 = 85
//          3 20  13   13  20 14

console.log(('(22 + 48 + 100) / 2:'),result3) // 85


//NEXT LESSON//

//НОВЫЕ ОПЕРАТОРЫ//

console.log(('5 % 2:'), 5 % 2)
// '%' остаток от деления 

// Пример //
console.log(('28 % 5:'), 28 % 5)
//

var i = 1
// i = i + 1 
// i++ // инкремент 

//i = i + 10
  i += 10
//  3
console.log(('i:'), i)
// i = i - 1
//i--

//i = i - 5
  i -= 5
//   3
console.log(('i:'), i)

i /= 5
console.log(('i -= 5:'), i)

i *= 8
console.log(('i *= 8:'), i)

console.log(++i)

// ++i префиксная запись 
// i++ постфиксная запись

console.log(--i)