function invalidLetter(array) {
  return (array.every((elem) =>(typeof elem !== 'number' || isNaN(elem)) ? false : true));
}
function invalidDigits(cpfNumber) {
  return (cpfNumber.every(digito => digito === cpfNumber[0]) ? false : true);
}
function countCPF(numb, arr) {
  const reducingArray = arr.map((elem, index) => elem * (numb - index)) 
    .reduce((elem, result) => (result + elem) % 11);
  let finalResult = 11 - reducingArray;
  if (finalResult > 9) {
    finalResult = 0;
  } else {
    finalResult;
  }
  return finalResult;
}
function validDigit(cpf) {
  let separatesDigit = cpf.slice(0, 9);
  let subtract = 10;
  const firstDigit = countCPF(subtract, separatesDigit);
  if (firstDigit === cpf[9]) {
    separatesDigit = cpf.slice(0, 10);
    subtract = 11; 
  }
  const secondDigit = countCPF(subtract, separatesDigit);
  const result = (firstDigit === cpf[9] && secondDigit === cpf[10]) ? true : false;
  return result;
}
function cpfValidator(cpf) {
  const numberCpf = cpf.split('').map(Number);
  let resultValidate ;
  if (numberCpf.length === 11 && invalidLetter(numberCpf) === true && invalidDigits(numberCpf) === true) {
    resultValidate = validDigit(numberCpf); 
  } else {
    return false;
  } 
  return resultValidate;
}
module.exports.cpfValidator = cpfValidator;