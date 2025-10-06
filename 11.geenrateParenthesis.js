// 22. Generate Parentheses

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]


var generateParenthesis = function (n) {
    let result = [];
    function backtrack(open, close, current) {
        if (open === n && close === n) {
            result.push(current);
            return;
        }
        if (open < n) {
            backtrack(open + 1, close, current + "(");
        }
        if (close < open) {
            backtrack(open, close + 1, current + ")");
        }
    }

    backtrack(0, 0, "");
    return result;
};
