
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0){
    return [];
  }
    
  let result = [];
  let reverse = false;

  matrix.forEach(row => {
    if (reverse === false)
    {
      row.forEach(element => result.push(element));
      reverse = true;
    } else {
      row.reverse().forEach(element => result.push(element));
      reverse = false;
    }
  });

  return result;
}
