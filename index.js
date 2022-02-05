// Задача №1

// создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.
// console.log(removeChar('eloquent')); // loquen
// console.log(removeChar('country')); // ountr
// console.log(removeChar('person')); // erso

function removeChar(strings) { // создаем фукцию в которую по итогу будет вкладываться нужная нам строка. 
    let string = ''; // Создаем переменную, к которой будет применяться метод (.substring(https://learn.javascript.ru/string))
    string = strings.substring(1, strings.length - 1); // применяем метод. Согласно условию задачи нам требуется убрать первый символ и последний.
    return string; // Возвращаем результат преобразования в переменную
};

// Проверка
console.log(removeChar('eloquent')); // loquen
console.log(removeChar('country')); // ountr


// Задача №2

//Реализуйте функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.

// const coll1 = [8, 9, 21, 19, 18, 22, 7]; 
// calculateSum(coll1); // 48 
// const coll2 = [2, 0, 17, 3, 9, 15, 4] 
// calculateSum(coll2); // 27

const coll1 = [8, 9, 21, 19, 18, 22, 7];
const coll2 = [2, 0, 17, 3, 9, 15, 4];
let result = 0

function calculateSum(items) { // создается функция для расчета суммы .
    items.forEach(function (item) { // вызыватеся метод (.forEach) для того, чтобы он и итерировал наш массив.(вызов обратной функции)
        if (item % 3 === 0) { // прописываем условия задачи. 
            result += item;
        };
    });
    return result;
};

//Проверка
console.log(calculateSum(coll1)); //48
// console.log(calculateSum(coll2)); // 27

//Не знаю почему, но при вызове 2-ух не закоментированных ( console.log(calculateSum(coll1)) и console.log(calculateSum(coll2)) ), первый ответ он выдаёт правильный, а второй выдаёт, как 75. Если же их запускать по отдельности, то всё ок.