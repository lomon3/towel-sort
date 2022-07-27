/* function towelSort(arr) {
    let res = [];
    arr.forEach(function(element, index) {
        (index % 2 == 0) ? res.push(...element): res.push(...element.reverse());
    });
    return res;
} */
// You should implement your task here.

console.log(towelSort([]));
module.exports = function towelSort(matrix) {
    let res = [];
    matrix.forEach(function(element, index) {
        (index % 2 == 0) ? res.push(...element): res.push(...element.reverse());
    });
    return res;
}