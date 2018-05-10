/**
 * This file contains the utilities or helper functions required by the 
 * main code logic (fulfillment of Google Actions) to allow for easy editing.
 */

/**
 * Get the values of the keys of an object.
 * Arguments:- 
 *      obj: object 
 * Returns:- values of the keys of an object 
 **/
exports.values = (obj) => Object.keys(obj).map((k) => obj[k]);

/**
 * Concatenates a list of messages into a single string.
 * Arguments:- 
 *      messages: The messages to concat 
 * Returns:- The concatenated messages 
 */
exports.concat =
  (...messages) => messages.map((message) => message.trim()).join(' ');

/**
 * Gets a random element from an array.
 * Arguments:- 
 *      arr: The array to retrieve an element from 
 * Returns:- The random element retrieved from the array 
 */
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

exports.random = random;

/**
 * Pop a random element from an array.
 * Arguments:- 
 *      array: The array to pop a random element from 
 * Returns:- The random element popped from the array 
 */
exports.randomPop = (array) => {
  if (!array.length) {
    return null;
  }
  const element = random(array);
  array.splice(array.indexOf(element), 1);
  return element;
};
