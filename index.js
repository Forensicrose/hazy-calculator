// set up "calculate" function and pass in the parameter "inputs"

function calculate(inputs) {
  // define variables needed for the function 
  let input1, input2, operator

  // set up "forEach" loop since using arrays. Could also use "for" loop.

  inputs.forEach((item) => {
    // replace all nulls with 0
    if (item === null) {
      (item = 0)
      // what to do when the operator is encountered. 0 will be placed into (equal to) input2 since it comes after the operator. If the operator is not encountered, then the 0 will go into (equal) input1, which comes before the operator. 
      if (operator) {
        input2 = 0
      } else {
        input1 = 0
      // Ignore anything that is not a number ('', , undefined and string of words. Convert stringified numbers to numbers & follow the comment above when the operator is encountered. 
      }
    } else if (!isNaN(item)) {
      if (operator) {
        input2 = Number(item)
      } else {
        input1 = Number(item)
      }
      // establish the operators 
    }
    if ((item === '+' || item === '-' || item === '*' || item === '/'))
    {
      operator = item
    }
  })
  // set up the calculator functionality and return NaN if operator is absent.
  if (operator === '+') {
    return input1 + input2
  } else if (operator === '-') {
    return input1 - input2
  } else if (operator === '*') {
    return input1 * input2
  } else if (operator === '/') {
    return input1 / input2
  } else {
    return NaN
  }
}



module.exports = calculate
