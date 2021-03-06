"use strict"
function Interview() {
	console.log("Interview started");
}
/**
* @TODO Write a method that sorts an array in random order
* @param {array} arr An array of any types
* @return {array} Returns the randomized array
*/
Interview.prototype.randomizeArr = function(arr) {

},
/**
* @TODO Write a method that checks if a string is an anagram
* @param {string} str String to be checked
* @return {boolean}
*/
Interview.prototype.checkAnagram = function(str) {

},
/**
* @TODO Write a method that calculates the possible totals and occurences of rolling a certain number 
*   with a x amount of dice and y amount of sides, assume all dice have same amount of sides
* @param {number} dice Number of dice
* @param {number} sides Number of sides each dice has
* @return {object} Returns an object with possible values[key] and total combinations[value]  
*/
Interview.prototype.possibleDiceRolls = function(dice, sides) {

},
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
/**
* Factory of sorting functions
* @param {string} Name of algorithm
* @return {function} Returns a sorting function based on algorithm passed
*/
Interview.prototype.sorter = function(algorithm) {
	var fns = {
		/**
		* @param {array} nums An array of numbers
		* @param {boolean} proceed A boolean of whether to continue recursion
		* @return {array} Returns shallow copy of sorted array
		*/
		bubble: function(nums, proceed) {
			if (proceed !== undefined && !proceed) { return nums; }
			var swapped = false;
			var nums = nums.slice();
			for (var i = 0; i < nums.length - 1; i++) {
				if (nums[i] > nums[i + 1]) {
					var temp = nums[i];
					nums[i] = nums[i + 1];
					nums[i + 1] = temp;
					swapped = true;
				}
			}
		
			return this.bubble(nums, swapped);
		},
		/**
		* @see fns.bubble
		*/
		sinking: function(nums, proceed) {
			return this.bubble(nums, proceed);
		},
		/**
		* @TODO 
		* @param {array} nums An array of numbers
		* @return {array} Returns shallow copy of sorted array
		*/
		insertion: function(nums, proceed) {

		},
		/**
		* @TODO 
		* @param {array} nums An array of numbers
		* @return {array} Returns shallow copy of sorted array
		*/
		selection: function(nums, proceed) {

		},
	}

	console.log(algorithm[0].toUpperCase() + algorithm.slice(1) + " sorter function returned");
	return fns[algorithm].bind(fns) || "No sorting algorithm by that name found."
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

var i = new Interview();


