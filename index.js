// Require the lodash library here in this line
var _ = require('lodash');
function sum(a, b) {
   // Use de add() function from lodash to sum the two numbers
return _.add(1,2);
}

function filterFalsyValues(arr) {
 
  // Use the compact() function from lodash to filter the array
   //console.log(arr);
   return _.compact(arr);
}

function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  return _.difference(firstArray, secondArray);
}

//#4
function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
  return _.fill(arr, value);
}

//#5
function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  console.log(arr);
  return _.mean(arr);
}

//#6
function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase
  return _.camelCase(str); 
}


//#7
function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string
  return _.capitalize(str); 
}

//#8
function sortByNames(arr) {
   // Use the sortBy() function from lodash to sort the array by name
  //console.log(arr);
  //    [ { name: 'John' }, { name: 'Alex' } ]
  return _.sortBy(arr, personsort => personsort.name[0]);
}

//#9
function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
 //console.log(arr);
 // [ [ 1, 2 ], [ 3, 4 ] ]
  const flatten = _.flattenDeep(arr);
  return _.mean(flatten);
}

//#10
function sortByNamesAndCapitalizeFirstLetter(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
}

//#11
function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
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
