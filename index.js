// №1) Реализуйте reverse(), которая принимает на вход массив и располагает элементы внутри него в обратном порядке. Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().
// const names = ['john', 'smith', 'karl']; // ['john', 'smith', 'karl']


const names = ['john', 'smith', 'karl'];

function reverseNames (names){
return [names[0], names[1], names[2]] = [names[2], names[1], names[0]];
}

console.log(reverseNames(names));

// №2) Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу. Например, предложение "The quick brown fox jumps over the lazy dog" является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
// Напишите функцию, которая возвращает true или false в зависимости от того, является она панграммой или нет. Не обращайте внимания на цифры и знаки препинания. Работаем только с латиницей.


function isPangram(str) { // Начало функции
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Вводим английский алфавит
	let strInLowerCase = str.toLowerCase(); // Меняем предложение в нижний регистр, для упрощения проверки

	for (let i = 0; alphabet.length > i; i++) /* Цикл, который пройдёт по каждой букве предложения и алфавита. Будет работать до тех пор, пока длина алфавит не окажается меньше или равна i */ {
		if (strInLowerCase.indexOf(alphabet[i]) < 0) /* Проверяем наличие буквы предложения в алфавите. Если не найдётся, то indexOf вернёт -1 и уйдёт в false */ {
			return false; // Возвращение false
		}
	}
	return true; // Возвращение true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false