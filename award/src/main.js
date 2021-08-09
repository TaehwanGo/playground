// import './test';
import { testFunction } from './test.js';

const mainList = document.querySelector('.awardList');
const inputTest = document.querySelector('.input__test');
const esInput = document.querySelector('#esInput');

// dummyData
const dummyMainListData = Array(20)
  .fill()
  .map(v => ({
    itemLink: '/AwardFestival/WinnersList.asp',
    itemImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjjOfEKwT2cspVrDjuJElO5QPOY_7C-xOTA&usqp=CAU',
    itemImgSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjjOfEKwT2cspVrDjuJElO5QPOY_7C-xOTA&usqp=CAU',
    title: 'New York Festival',
    region: 'Lisbon, Portugal',
  }));

// console.log(dummyMainListData);
let count = 0;

// MainList
// const AddMainList = mainListData => {
//   mainListData.forEach(mainListItem => {
//     console.log(count++);
//     mainList.innerHTML += String.raw`<li>
//     <a href=${mainListItem.url} class="linkItem">
//       <div class="imgWrap">
//         <div class="imgCell">
//           <img src=${mainListItem.itemImg} alt=${mainListItem.title} />
//         </div>
//         <div class="imgCell small">
//           <img src=${mainListItem.itemImgSmall} alt=${mainListItem.title} />
//         </div>
//       </div>
//       <div class="txtWrap">
//         <p class="txt txt01">${mainListItem.title}</p>
//         <p class="txt txt02">${mainListItem.region}</p>
//       </div>
//     </a>
//   </li>`;
//   });
// };
function onKeyup(event) {
  if (event.keyCode === 13) {
    console.log('enter');
  }
}

function init() {
  // AddMainList(dummyMainListData);
  testFunction();
  inputTest.addEventListener('keyup', () => {
    console.log('input');
  });
  esInput.addEventListener('keyup', onKeyup);
}

init();
