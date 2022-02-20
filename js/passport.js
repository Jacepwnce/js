/* passport.js */

export default class Passport {
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
	// your code
  constructor (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName(){
    return this.firstName.toLowerCase();
  };

  getLastName(){
    return this.lastName.toUpperCase();
  };

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  getInitials(){
    return `${this.firstName[0]}.${this.lastName[0]}.`;
  }

  getIsValidName(){
    if (this.firstName.length > 0 || this.lastName > 0){
      return "Yes";
    } else {
      return "No";
    }
  }
}