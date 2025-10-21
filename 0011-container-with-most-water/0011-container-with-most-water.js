/**
 * @param {number[]} height
 * @return {number}
 */
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

  return max;
};

