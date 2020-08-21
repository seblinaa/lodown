'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} action: The Function to be applied to each value in the collection
 * 
 * @returns: each element of the list
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/** 
 * identity: takes a value and returns it unchanged
 * 
 * @param {value}: single value that can take any datatype
 * 
 * @returns: the input value unchanged
 * 
 */

 function identity(value){
     //return that value unchanged
     return value;
 }
module.exports.identity = identity;


/**
* typeOf: takes any value and defines the data type
* 
* @param {Array, Number, Boolean, Undefined, String} anything: Any value
* 
* @returns: returns a string with the data type
* 
* 
*/
function typeOf(value) {
    if(Array.isArray(value)) {
        return "array";
    }else if(value === null) {
        return "null";
    }else return typeof value
}
module.exports.typeOf = typeOf;


/**
* first: designed to return an array literal if it is not an array
* 
* if there was no number or if it wasn't given, it will return just the first element
* 
* @param {array}: a place holder for an array
* 
* @param {number}: a place holder for a number
* 
* @returns: the first number items in the array
* 
*/
function first(array, number) {
    if(!Array.isArray(array)) {
        return [];
    } else if (typeof number === "undefined") {
        return array[0];
    } else 
    return array.splice(0, number); 
}
module.exports.first = first;


/**
* last: designed to return an array literal if it is not an array
* 
* if there was no number or if it wasn't given, it will return just the last element
* 
* @param {Array}: a place holder for an array
* 
* @param {Number}: a place holder for a number
* 
* @returns the last number items in the array
* 

*/
function last(array, number) {
    if (!Array.isArray(array)) {
        return [];
    } else if (isNaN(number)) {
        return array[array.length -1];
    } else if(number > array.length) {
        return array;
    } else 
        return array.splice(array.length - number, number); 
}

module.exports.last = last;

/**
* indexOf: designed to return the index of the first occurring value
* 
* @param {array}: a place holder for an array
* 
* @param {value}: a place holder for any value
* 
* @returns: -1, if the value isn't in the array, 

*/
function indexOf(array, value) {
    if (array.includes(value)) {
        for (var i = 0; i < array.length; i++) {
            if (value === array[i]) {
                return i;
            } 
        } 
    } else return - 1;
};

module.exports.indexOf = indexOf;

/**
* contains: designed to see if a value is present in a list
* 
* @param {array}: a place holder for an array
* 
* @param {value}: a place holder for any value
* 
* @returns: true if the array contains value, false if not
*/

function contains(array, value) {
	return array.includes(value) ? true : false
};


module.exports.contains = contains;

/**
* unique: designed to give a duplicate free version of the array
* 
* @param {array}: a place holder for an array
* 
* loops through the array and gives new array with no duplicates
* 
* @returns an array of unique elements.
*/

function unique(array){

var uniqueArray = [];

for(var i = 0; i < array.length; i++){
	if(indexOf(uniqueArray, array[i]) === -1){
		uniqueArray.push(array[i])
     
  } 
 
}
  return uniqueArray;
} 


module.exports.unique = unique;

/**
* filter: designed to look through each value in a list 
* 
* @param {array}: a place holder for an array
* 
* @param {function}: is a predicate, to test each element of the array. 
* 
* Return true to keep the element, false otherwise. (action(element, index, array) 
* 
* loops through the array and filters out the values and puts them into a new array
* 
* @returns: an array of all the values that pass a truth
*/

function filter(array, action){
 
   var arr = [];
  
  each(array, function(element, index, array) {
         if(action(element, index, array) === true) {
    			arr.push(element)
      }
         
    }) 
    return arr
 }
module.exports.filter = filter;


/**
* reject: used to give the answer which does not match with the given condition
* 
* @param {array}: a place holder for an array
* 
* @param {function}: the function invoked per iteration. 
* 
* oppositie of _.filter, loops through the array and returns the rejected values of the array
* 
* @returns: the values in list without the elements that the truth test (predicate) passes.
* 
*/

function reject (array, func) {
   var newArray = [];
    each(array, function(element, index, array){
   if (func(element, index, array) === false) {
     newArray.push(element);
   }
 }); 
    return newArray;
}
module.exports.reject = reject;


/**
* partition: creates an array of elements split into two groups, the first of which contains elements that return true
* 
* the second of contains elements test returns false
* 
* @param {array}: a place holder for an array, the collection to iterate over
* 
* @param {function}: the function invoked per iteration. 
* 
* @returns: two arrays.
*/

function partition(array, test){
    
    let result = [];
    let result2 = []; 
    let result3 = []; 
     
    for (let i =0; i < array.length; i++){
        if (test(array[i], array[i].key, array)=== true){
            result.push(array[i]);
        } else{
            result2.push(array[i])
            
        } 
        
        
    } result3.push(result, result2); 
    return result3; 
    
}
module.exports.partition = partition;

/**
* map: used to produce a new array of values by mapping each value in list through transformation function
* 
* @param {collection}: a place holder for an array or an object
* 
* @param {function}: the function invoked per iteration. 
* 
* displays the result as a list on the console
* 
* @returns: an array of values by running each element in collection thru function 
*/

function map(collection, func) {
let result = [];
    if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
            result.push(func(collection[i], i, collection));
        }
    } else {
        for (const property in collection) {
            result.push(func(collection[property], property, collection));
        }
    } return result; 
} 
module.exports.map = map;

/**
* pluck: designed to extract a list of a given property 
* 
* @param {array}: a place holder for an array or an object
* 
* @param {property}: placeholder for any given property in an array
* 
* @returns: an array of that property’s detail which we need to extract
*/

function pluck(array, property){
    

     return array.map(function(obj) {
         return obj[property];
        
  })
    
    
}
module.exports.pluck = pluck;

/**
* every: used to test all the elements of the list can pass the given test
* 
* @param {collection}: a place holder for an array or an object
* 
* @param {test}: callback function to test for each element, taking three arguments
* 
* @returns true if all of the values in the list pass the truth test (when every element of the list fulfills the given condition) 
* 
* @returns ‘false’ (when at least one element does not fulfill the condition)
*/

function every(collection, test){
    
    var check = test || identity;
    for (let i = 0; i < collection.length; i++){

        if (check(collection[i]) === false) { 
            return false; 
        }
    }
     return true; 

}
module.exports.every = every;

/**
* some: used to find whether any value in the given list matches the given condition or not
* 
* @param {collection}: a place holder for an array or an object
* 
* @param {test}: callback function to >TEST< for each element, taking three arguments
* 
* The >TEST< is invoked with three arguments: (value, index|key, collection).
* 
* If at least one value satisfies this condition then the output will be true. 
* 
* When NONE of the values matches then the output will be false.
* 
* loop is stopped once test returns false. 
* 
* @returns value which is either true (when at least one element of the list fulfills the given condition) 
* 
* @returns false (when none of the elements fulfill the condition).
*/

function some(collection, test){
 let trueOrFalse = false;
    each(collection, function(element, index, collection) {
        if(typeOf(test) === 'function' && test(element, index, collection)) {
            trueOrFalse = true;
        } else if (element === true) {
            trueOrFalse = true;
        }
    }); return trueOrFalse;

}
module.exports.some = some;


/**
* reduce: reduces collection to a value which is the accumulated result of running each element in collection thru function
* 
* boils down a list of values into a single value
* 
* where each successive invocation is supplied the return value of the previous
* 
* @param {array}: a place holder for an array 
* 
* @param {function}: the function invoked per iteration, taking 4 arguments 
* 
* @param {seed}: the initial value
* 
* The function is passed four arguments: the seed, then the value and index (or key) of the function, and finally a reference to the entire array.
* 
* If no seed is passed to the initial invocation of reduce, the function is not invoked on the first element of the list. 
* 
* The first element is instead passed as the seed in the invocation of the function on the next element in the list.
* 
* @returns the value of the last iteration is returned by the _.reduce() function
*/

function reduce(array, func, seed){
	var previousResult;
  if (seed !== undefined && seed !== null) {
	previousResult = seed
  for(var i = 0; i < array.length ; i++){
  	previousResult = func(previousResult, array[i], i)
  	}
  } else if(!seed) {
  previousResult = array[0]
    for (var i = 1; i < array.length; i++) {
      previousResult = func(previousResult, array[i], i)
    }
}
  
return previousResult;
}
module.exports.reduce = reduce;


/**
* extend: copies every property of the source objects into the first object
* 
* @param {object1}: the destination object
* 
* @param {...args}: the source objects
* 
* iterates over own and inherited source properties
* 
* objects will be copied by using reference, not duplicated.
* 
* @returns a copy of all the properties of the source objects over the destination object
* 
* @returns the destination object
* 
* @returns object in-order, so the last source will override properties of the same name in previous arguments.
* 
*/

function extend(object1, ...args) {
    Object.assign(object1, ...args);
    return object1;
};
module.exports.extend = extend;
 