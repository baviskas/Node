/*A Calculator
Should be able to add 2 numbers
Should be able to add 2 numbers in string format
Should be able to treat non numeric strings as zero
Should be able to add functions returning numbers
Should be able to add functions returning numbers in string format
Should be able to add functions returning functions returning numbers in string format
Should be able to add only one number
Should return zero by default
Should be able to add varying number of numbers
Should be able to add array of numbers
Should be able to add array of numbers and numbers in string format
Should be able to add functions returning array of numbers
Should be able to add array of functions returning array of numbers
Should be able to add nested array of numbers*/

/*function add(x, y) {
	function parseArg(n) {
		if(Array.isArray(n)) {
			let result = 0;
			for(let i=0; i< n.length; i++)
				result += parseArg(n[i]);
			return result;		
		}
		if(typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0: parseInt(n,10)                 
	}
	let result = 0;
	for(let i=0; i< arguments.length; i++)
		result += parseArg(arguments[i]);
	return result;
}*/

// parseInt is to add arguments in string format
// typeof n === function is for type checking. 
/* Recursive calls parseArg(n()) is for testcases of argumenets with functions returning strings 
and functions returning functions.*/
//isNan is for testcases with no arguments or nonnumric argumnets. Default value set to zero.
// arguments is used for varying number of arguments of a function.
// Array.isArray(n) is for checking if argument is an array.
/* last loop is to add arrays, and recursive call is for array with strings, nested arrays, 
	functions returning number array and so on */


/*function add(x,y) {
	function parseArg(n) {
		if (Array.isArray(n)) return add.apply(this,n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n);
	}
	var result = 0;
	for (var i = 0; i < arguments.length; i++)
		result += parseArg(arguments[i])
	return result;
}*/


function add(x,y) {
	function parseArg(n) {
		if (Array.isArray(n)) return add.apply(this,n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n);
	}
	return arguments.length <= 1? parseArg(arguments[0]): parseArg(arguments[0]) + add([].slice.call(arguments,1));
}