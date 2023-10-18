// You should implement your task here.

module.exports = function towelSort(matrix) {
  {
    if (!matrix || matrix.length === 0) { return []; }
    const sorted = [];
    for (let row = 0; row < matrix.length; row++) {
      if (row % 2 === 0) {
        sorted.push(...matrix[row]);
      } else {
        sorted.push(...matrix[row].reverse());
      }
    }
  
    return sorted; []}
}
