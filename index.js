// Require the lodash library here in this line
const _ = require("lodash");

function sum(a, b) {
  return _.add(a, b);
}

function filterFalsyValues(arr) {
  return _.compact(arr);
}

function differenceInArrays(firstArray, secondArray) {
  return _.difference(firstArray, secondArray);
}

function fillArray(arr, value) {
  return _.fill(arr, value);
}

function calculateMean(arr) {
  return _.mean(arr);
}

function camelCase(str) {
  return _.camelCase(str);
}

function capitalize(str) {
  return _.capitalize(str);
}

function sortByNames(arr) {
  return _.sortBy(arr, ["name"]);
}

function flatArrayAndCalculateMean(arr) {
  let result = _.flatten(arr);
  return _.mean(result);
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  let names = _.sortBy(arr, ["name"]);
  return names.map((str) => _.capitalize(str));
}

function transformToSnakeCaseAndAllCaps(arr) {
  let result = _.snakeCase(arr);
  return _.toUpper(result);
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
