/* passport.js */

export default class Passport {
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
	// your code
  constructor (firstName, lastName){  //конструктор принимает на себя два параметра имя и фамилию
    this.firstName = firstName; // переобозначаем переменную экземпляра this.firstName в параметр constructor
    this.lastName = lastName;   // переобозначаем переменную экземпляра this.lastName в параметр constructor
  }

  getFirstName(){ //создаём метод класса 
    return this.firstName.toLowerCase(); //преобразуем переменную this.firstName в нижний регистр путем использования метода .toLowerCase()
  };

  getLastName(){ //создаём метод класса
    return this.lastName.toUpperCase();  //преобразуем переменную this.lastName в верхний регистр путем использования метода .toUpperCase()
  };

  getFullName(){ //создаём метод класса
    return `${this.firstName} ${this.lastName}`; // с помощью интерполяции получаем полное имя
  }

  getInitials(){ //создаём метод класса
    return `${this.firstName[0]}.${this.lastName[0]}.`; // с помощью интерполяции и обращения к первому символу - [0]. Получаем инициалы
  }

  getIsValidName(){ //создаём метод класса
    if (this.firstName.length > 0 && this.lastName.length > 0 && this.lastName[this.lastName.length -1] !== "."){ // в этом методе требуется, чтобы у нас выводилось "Yes", если firstName и lastName содержит хоть один символ.А так же в требования входит: если на конце lastName стоит ".", то валидность метода выдавала "No"
      return "Yes";
    } else {
      return "No";
    }
  }
}