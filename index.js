var _ = require('lodash');

function sum(a, b) {
  return _.add(a,b);
}

function filterFalsyValues(arr) {
  return _.compact(arr);
}

function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  return _.difference(firstArray, secondArray);
}

function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
  return _.fill(arr, value);
}

function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  return _.mean(arr);
}

function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase
  return _.camelCase(str);
}

function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string
return _.capitalize(str);
}

function sortByNames(arr) {
  return _.sortBy(arr, "name");
  // Use the sortBy() function from lodash to sort the array by name
}

function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  const arr2 = _.flatten(arr);
  // Use the flatten() function from lodash to flatten the array
  return _.mean(arr2);
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  return _.sortBy(arr, "name").map((element) => _.capitalize(element.name));
}

function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  return [_.toUpper(_.snakeCase(arr))];
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
