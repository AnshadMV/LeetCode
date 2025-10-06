
// 13. Roman to Integer

let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
var romanToInt = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let current = obj[s[i]]
        let next = obj[s[i + 1]]
        if (next > current) {
            res -= current
        } else
            res += current
    }
    console.log(res)
}

s = 'MCMXCIV'
romanToInt(s)
