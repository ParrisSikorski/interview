"use strict"

function Interview() {
	console.log("Interview started");
}
/**
* Factory of sorting functions
* @param {string} Name of algorithm
* @return {function} Returns a sorting function based on algorithm passed
*/
var nums = [1,2,3,234213,23,41,1234];
Interview.prototype.sorter = function(algorithm) {
	var fns = {
		/**
		* @param {array} nums An array of numbers
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
		sinking: function(nums, proceed) {
			return this.bubble(nums, proceed);
		},
		/**
		* Handles returning correct method and allows extra actions
		* @params {string} algorithm Name of algorithm received from sorter method
		* @return {function} Returns the correct method associated with the algorithm
		*/
		controller: function(algorithm) {
			console.log(algorithm[0].toUpperCase() + algorithm.slice(1) + " sorter function returned");
			return this[algorithm.toLowerCase()];
		}
	}

	return fns.controller(algorithm).bind(fns) || "No sorting algorithm by that name found."
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

var i = new Interview();


