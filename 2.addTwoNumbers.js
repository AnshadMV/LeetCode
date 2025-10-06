// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

    function addTwoNumbers(a, b) {
        
    let n1 = Number(a.slice().reverse().join("")); 
    let n2 = Number(b.slice().reverse().join(""));
    let sum = (n1 + n2).toString().split("").reverse().map(Number);
    return sum;
    }
    l1 = [2,4,3], l2 = [5,6,4]
    console.log(addTwoNumbers(l1,l2))





































// function addTwoNumbers(l1, l2) {
//     let result = [];
//     let carry = 0;
//     let i = 0, j = 0;

//     while (i < l1.length || j < l2.length || carry) {
//         let sum = (i < l1.length ? l1[i] : 0) +
//                   (j < l2.length ? l2[j] : 0) +
//                   carry;

//         result.push(sum % 10);  // store last digit
//         carry = Math.floor(sum / 10); // update carry

//         i++;
//         j++;
//     }

//     return result;
// }

// // Example 1
// console.log(addTwoNumbers([2,4,3], [5,6,4])); // [7,0,8]
// // Example 2
// console.log(addTwoNumbers([0], [0])); // [0]
// // Example 3
// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); // [8,9,9,9,0,0,0,1]



