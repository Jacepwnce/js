/* todos.js */
export default class Todos {
	// Do NOT modify the constructor
	constructor() {
	  this.todos = [
		{
			title: "Learn JavaScript",
		  category: "work",
		},
		{
		  title: "Meditate",
		  category: "personal",
		},
	  ];
	}
  
	getAll() {
		return this.todos;
	  }	
  
	  getCount() {
		 return this.todos.length   
	  }
	  
	  add(title, category) {
		 this.todos.push({title, category})  
	  }
	  
	  getWork() {
		  return this.todos.filter(todo => todo.category === "work");   
	  }
	  
	  getWorkCount() {
		  let work =this.todos.filter(todo => todo.category === "work")   
		  return work.length;
	  }
	  
	  getPersonal() {
		return this.todos.filter(todo => todo.category === "personal");  
	  }
	  
	  getPersonalCount() {
		  let person = this.todos.filter(todo => todo.category === "personal")
		  return person.length; 
	  }
  }