var str1 = 'Hello world'
var str2 = "Hello world2"

console.log(str1)
console.log(str2)


var personName = 'Victor'

var message = 'Человека зовут " ' + personName + ' "' //Внутри ('')  можно вставлять ("")

var message2 = "Человека зовут ' " + personName + " ' "


var message3 = 'Человека зовут \' ' + personName + ' \''

//    (\) - экранирует ('') Испоельзуются для того, чтобы можно было использовать  одинарные ('') в строчке не по одному разу

console.log(message3)

var newMessage = 'Hello world!!!!'

console.log(newMessage.length)// - показывает количество симолов в строке
console.log(newMessage.toUpperCase())// переводит текст в верхний регистр
 console.log(newMessage.toLowerCase()) //- нижний регистр 
 console.log(newMessage.charAt(0))// - определяет символ по позиции в строке
console.log(newMessage.indexOf('world')) //- определяет с какой позиии начинается искаемый элемент
 console.log(newMessage.substr(1, 4))// - забирает или выделят требумые символы
 console.log(newMessage.substr(newMessage.indexOf('world'), 5)) //- не понял !!!!!!!
 console.log(newMessage.substring(1, 3)) //- показывает символы в данном диапазоне