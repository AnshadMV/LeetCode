// Given an integer x, return true if x is a palindrome, and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


//<------------------------------------------$ One $------------------------------------------------------


function isPlindrome(x) {
    let result= String(x);
    let a=result.split('').reverse().join("")
    return a==result ? 'true' : 'false'
}

let x = -121
console.log(isPlindrome(x))



//<------------------------------------------$ Two-pointer approach $------------------------------------------------------

function isPalindrome(int) {
    let l = int.length;
    for (let i = 0; i < l / 2; i++) {
        if (int[i] !== int[l - 1 - i]) {
            return false;
        }
    }
    return true;
}
let int = 4567890;
console.log(isPalindrome(String(int))); 



//<------------------------------------------$ Two-pointer approach $------------------------------------------------------
