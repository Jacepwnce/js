/* countries.js */
/**
 * @param {string[]} countries
 */
 export function getDropdown(countries) {
	 let html = `<option value = ""> Please select </option>`
	 countries.forEach(function (el){
		 html +=`<option value = "${el.toLowerCase()}"> ${el} </option>`
	 });
	 return html
}