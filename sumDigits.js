/**
 * This function sums the digits of a number
 * @param {int} number 
 * @returns int
 */
function sumDigits(number) {
    number = Math.abs(number) + ''
    return number.split('').map(Number).reduce((a,b) => a+b)
  }