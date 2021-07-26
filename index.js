// set up calculate function and pass in the parameter inputs

function calculate(inputs) {
  // define variables needed for the function 
  let input1; let input2; let operator

  // set up forEach loop since using arrays

  inputs.forEach((item) => {
    // replace all nulls with 0
    if (item === null) {
      item = 0
      // what to do when the operator is encountered. 0 will be placed into (equal to) input2 since it comes after the operator. If it is not encountered, then the 0 will go into (equal) input1. 
    } if (operator) {
      input2 = 0
    } else {
      input1 = 0
    }
  })
}
