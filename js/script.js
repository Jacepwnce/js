// В массив можно вкладывать любой тип данных!!!!



// var cars = [      // Первый формат записи
    // 'Ford',
    // 'Mazda',
    // 'Kia',
    // 'BMW'
// ]

//var cars = ['Ford','Mazda','Kia','BMW']  // второй формат записи
var any = [42, 'Apple', {a:1}]
console.log(any)


var cars = ['Ford','Mazda','Kia','BMW']
console.log(cars[1])
//console.log(cars)

console.log(cars.length)//длина массива

//x.push - добавляет элемент в массив
cars.push('Audi')

//x.pop - удаление элемента из массива и возврещение 
// cars.pop()
// console.log(cars)

var audi = cars.pop()
console.log(cars, audi)




//удаляет первый элемент и возвращает 

var Ford = cars.shift()
console.log(cars, Ford)

//добавляет элемент в начало

cars.unshift(audi)
console.log(cars)

//находит определенный элементы в массиве


var index = cars.indexOf('Kia')
var kia = cars[index]
console.log(kia)