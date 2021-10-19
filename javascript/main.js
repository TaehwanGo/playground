let globalNumber = 0;
const countDiv = document.querySelector('#countDiv');
const btnCount = document.querySelector('#btnCount');

const testIfGlobalVariableChange = (number) => (event) => {
  console.log('globalNumber', globalNumber);
  console.log('number', number);
  //   number += 1;
  number += 5;
  console.log('globalNumber', globalNumber); // globalNumber라는 값이 변화될 것으로 예상했으나 그렇지 않았다.
  console.log('number', number);
  countDiv.innerHTML = number;
};

btnCount.addEventListener('click', testIfGlobalVariableChange(globalNumber));
