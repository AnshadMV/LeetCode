// 2665. Counter II

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4


var createCounter = function (init) {
    let v = init
    return {
        increment: () => ++v,
        reset: () => v = init,
        decrement: () => --v

    }

};

const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4


// Caution about v++ and v--
