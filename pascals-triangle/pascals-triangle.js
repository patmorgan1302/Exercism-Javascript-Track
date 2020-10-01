export const rows = numRows => {
  // setting variable equal to an empty array to start
  let triangle = [];
  // looping through our input, and setting out empty array equal to a new Array + 1
  for (let i = 0; i < numRows; i++) { 
  // taking our looped through array and setting it equal to a new Arry + 1
    triangle[i] = new Array(i+1);
    for (let n = 0; n < i+1; n++) { 
  // initialize the first and last index of our array to equal 1           
      if (n === 0 || n === i) {
        triangle[i][n] = 1;
  // here we are initializing the sum of the elements from the line before
      } else {
        triangle[i][n] = triangle[i-1][n-1] + triangle[i-1][n];
      }
    }
  }
  return triangle;
};

