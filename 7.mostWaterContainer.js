
 height = [1,8,6,2,5,4,8,3,7]
//  var maxArea = function (height) {
//     let array = [];
//     let width = 0;
//     let c=-Infinity;
//     for (let i = 0; i < height.length; i++) {
//         for (let j = 1; j < height.length; j++) {
//             width = j - i
//             c = Math.min(height[i], height[j])
//             array.push(c * width)
//         }
//     }
//     c = Math.max(...array)
//      console.log(c)
// };

// maxArea(height)

// //--------------or ------------------

var maxArea = function(height) {
  let startIndex = 0;
  let endIndex = height.length - 1;
  let max = 0;

  while (startIndex < endIndex) {
    const width = endIndex - startIndex;
    const h = Math.min(height[startIndex], height[endIndex]);
    max = Math.max(max, width * h);

    if (height[startIndex] < height[endIndex]) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return console.log(max)
};

maxArea(height)