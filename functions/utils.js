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

/**
 * Convert DateTime object from one time zone to 
 * another time zone.
 * Arguments:- 
 *      dt1: DateTime object which needs to be converted to another time zone 
 *      dt2: DateTime object of the time zone to which dt1 needs to be converted 
 * Returns:- Converted DateTime object to new time zone 
 */
exports.convertDateTime = (dt1, dt2) => {
  const offset = dt2.getTimezoneOffset() * 60000;
  var dt1_time = dt1.getTime();
  return (new Date(dt1_time + offset));
};