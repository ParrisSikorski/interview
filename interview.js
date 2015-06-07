"user strict"

function Interview() {
	console.log("Interview started");
}
/**
* Fizzbuzz
* @param {number} count Number of iterations
*/
Interview.prototype.fizzBuzz = function(count) {
	for (var i = 1; i <= count; i++) {
		var fizz = i % 3 === 0;
		var buzz = i % 5 === 0;
		if (fizz && buzz) {
			console.log("Fizzbuzz");
		} else if (fizz) {
			console.log("Fizz");
		} else if (buzz) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}
/** 
* Find all permutations of a single word string
* @param {string} str Single word string
* @return {array} Returns an array with all permutations
*/
Interview.prototype.permuteString = function(str) {
	var permutations = [];
	
	function permute(_str, start) {
		if (start === str.length - 1) { return false }
		for (var i = start; i < _str.length; i++) {
			var letters = _str.split("");
			letters[start] = [letters[i], letters[i] = letters[start]][0];			
			var word = letters.join("");
			if (start === _str.length - 2) {
				permutations[permutations.length] = word;
			}
			permute(word, start + 1);
		}
	}

	return permute(str, 0) || permutations;
};

var interview = new Interview();
