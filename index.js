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
      // Ignore anything that is not a number ('', , undefined and strings of words. Convert stringified numbers to numbers & follow the comment above when the operator is encountered. 
    } else if (!isNaN(item)) {
        if(operator) {
            input2 = Number(item)
        }else {
            input1 = Number(item)
        }
        //establish the operators 
    }if (item === '+', '-', '*', '/') {
        item = operator
    }
  })
}
