import { countries } from './data.js';

const selectTag = document.querySelector('#selectTag');

const addOptions = (list) => {
  list.forEach((item) => {
    selectTag.innerHTML += String.raw`
        <option value="${item.id}">${item.nationName}</option>
    `;
  });
};

addOptions(countries);

selectTag.addEventListener('change', () => {
  //   console.log('change');
  console.log(selectTag.value);
});
