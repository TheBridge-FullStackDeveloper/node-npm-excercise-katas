var _ = require('lodash');
 // Require the lodash library here in this line

function sum(a, b) {
  return _.add(a, b);
  // Use de add() function from lodash to sum the two numbers
}

function filterFalsyValues(arr) {
  return _.compact(arr);
  // Use the compact() function from lodash to filter the array
}

function differenceInArrays(firstArray, secondArray) {
  return _.difference(firstArray, secondArray);
  // Use the difference() function from lodash to get the difference between the two arrays
}

function fillArray(arr, value) {
  return _.fill(arr, value);
  // Use the fill() function from lodash to fill the array with the value
}

function calculateMean(arr) {
  return _.mean(arr);// Use the mean() function from lodash to calculate the mean of the array
}

function camelCase(str) {
  return _.camelCase(str);// Use the camelCase() function from lodash to convert the string to camelCase
}

function capitalize(str) {
  return _.capitalize(str);// Use the capitalize() function from lodash to capitalize the string
}

function sortByNames(arr) {
  return _.sortBy(arr, "name");// Use the sortBy() function from lodash to sort the array by name
}

function flatArrayAndCalculateMean(arr) {
  const flat = _.flatten(arr);// Use the mean() function from lodash to calculate the mean of the array
  return _.mean(flat);// Use the flatten() function from lodash to flatten the array
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  const sort = _.sortBy(arr, 'name'); // Sort the array of objects by the 'name' property
  return sort.map(item => _.capitalize(item.name)); // Capitalize the first letter of each name and return only the name
}

function transformToSnakeCaseAndAllCaps(arr) {
  return arr.map(str => _.toUpper(_.snakeCase(str)));// Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
}

module.exports = {
  sum,
  filterFalsyValues,
  differenceInArrays,
  fillArray,
  calculateMean,
  camelCase,
  capitalize,
  sortByNames,
  flatArrayAndCalculateMean,
  sortByNamesAndCapitalizeFirstLetter,
  transformToSnakeCaseAndAllCaps,
};