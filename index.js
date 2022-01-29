// Реализуйте функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по-умолчанию. Функция принимает на вход три аргумента:
// Массив
// Индекс
// Значение по умолчанию (равно null)
// const cities = ['moscow', 'london', 'berlin', 'porto'];
// get(cities, 1); // 'london'
// get(cities, 4); // null
// get(cities, 10, 'paris'); // 'paris'
// get(cities, -1, 'oops'); // 'oops'

const cities = ['Moscow', 'London', 'Berlin', 'Porto']

function get(cities, index, def = null) {
  if (index >= cities.length || index < 0) { // Здесь прописываем инструкцию для массива. Если индекс массива не существует, то он выводит def 
    return def
  } else {
    return cities[index] // Здесь в функцию возращается требуемый нам индекс 
  }
}

// Проверка
console.log(get(cities, 1)); // 'London'
console.log(get(cities, 4)); // null
console.log(get(cities, 10, 'Paris')); // 'Paris'
console.log(get(cities, -1), 'Oops'); // 'Oops'
console.log(get(cities, 11, 'Tomsk')); // Tomsk



// Задача 2
// Напишите функцию,  которая разбивает слова в регистре.

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// "" =>  ""

// Для решения данной задачи использовался метод split (https://devacademy.ru/article/izuchaem-metod-split-v-javascript-na-primerakh)

function split(string) {     // объявляем функцию split с получаемым аргументом string (строка)
  let mySplit = string.split(/(?=[A-Z])/); // для того , чтобы метод split отработал нам нужно прописать условия после которых он отработает. В задаче требуется, разделить слова по заглавным буквам слов
  return mySplit 
}

// Проверка
console.log(split('camelCasing')) // 'camel' 'Casing'
console.log(split('identifier')) // 'identifier'
console.log(split('doingSomethingBoring')) //'doing' Something' 'Boring'


// Напишите функцию, которая возвращает сумму всех позитивных чисел.
// По умолчанию сумма равна 0.

// Сделал по видео из YouTube - https://www.youtube.com/watch?v=DkQc5t_LfSQ

let Array = [1, -4, 7, 12] // Массив
let sum = 0 // Создается переменная, которая будет принимать результат суммы положительных чисел

// Не придумал других вариантов, кроме как посмотреть в инернете. В интеренете решение производятся через цикл, так же как и в книге по JS 

for (let i = 0; i < Array.length; i++) {  // создаётся цикл (for) где (1) i = инкремент, который говорит нам о то, что это цикл. (2) i < Array.length - тут показывается, количество шагов, которые выолнятся в цикле. (3) i++ - тут мы показываем, каким образом будет производиться переход в данном массиве 

  if (Array[i] > 0) {   // Прописываем условия цикла. Нам требуется найти сумму положительных чисел и для этого задаем условие if (Arrai[i] > 0) - эта строчка производит поиск в массиве чисел которые больше значения (0). 

    sum += Array[i] // Тут прописывается уже непосредствоено действие с найдеными в массиве числами.
  }
}
console.log(sum) //20