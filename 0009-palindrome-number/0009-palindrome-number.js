/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let result = String(x);
    let a = result.split('').reverse().join("")
    return a == result
};