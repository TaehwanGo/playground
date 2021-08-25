import { data } from './dummyList.js';
const paginationList = document.querySelector('#paginationList');
const buttonFirstPage = document.querySelector('#buttonFirstPage');
const buttonNextPage = document.querySelector('#buttonNextPage');
const buttonPreviousPage = document.querySelector('#buttonPreviousPage');
const buttonNextTermPage = document.querySelector('#buttonNextTermPage');
const buttonPreviousTermPage = document.querySelector(
  '#buttonPreviousTermPage',
);
const buttonLastPage = document.querySelector('#buttonLastPage');

// list param data
let currentPage = 1; // PageNum

// pagination rendering을 위한 data
let totalPage = 1; // Math.ceil(TotalCount/iPagesize)

function blockButtonsCannotGoToPage() {
  // 초기화
  // buttonFirstPage.style.pointerEvents = 'auto'; // first
  // buttonPreviousTermPage.style.pointerEvents = 'auto'; // <<
  // buttonPreviousPage.style.pointerEvents = 'auto'; // <
  // buttonNextPage.style.pointerEvents = 'auto'; // >
  // buttonNextTermPage.style.pointerEvents = 'auto'; // >>
  // buttonLastPage.style.pointerEvents = 'auto'; // last
  // 아에 없애기
  buttonFirstPage.style.display = 'list-item'; // first
  buttonPreviousTermPage.style.display = 'list-item'; // <<
  buttonPreviousPage.style.display = 'list-item'; // <
  buttonNextPage.style.display = 'list-item'; // >
  buttonNextTermPage.style.display = 'list-item'; // >>
  buttonLastPage.style.display = 'list-item'; // last

  if (currentPage === 1) {
    // buttonFirstPage.style.pointerEvents = 'none'; // first
    // buttonPreviousPage.style.pointerEvents = 'none'; // <
    //
    buttonFirstPage.style.display = 'none'; // first
    buttonPreviousPage.style.display = 'none'; // <
  }

  if (currentPage <= 10) {
    // buttonPreviousTermPage.style.pointerEvents = 'none'; // <<
    //
    buttonPreviousTermPage.style.display = 'none'; // <<
  }

  if (currentPage === totalPage) {
    // buttonNextPage.style.pointerEvents = 'none'; // >
    // buttonLastPage.style.pointerEvents = 'none'; // last
    //
    buttonNextPage.style.display = 'none'; // >
    buttonLastPage.style.display = 'none'; // last
  }

  if (currentPage + 10 > totalPage) {
    // buttonNextTermPage.style.pointerEvents = 'none'; // >>
    buttonNextTermPage.style.display = 'none'; // >>
  }
}

function setPagination(data) {
  console.log('setPagination', data);
  const { TotalCount, iPageTerm, iPage, iPageSize } = data;
  totalPage = Math.ceil(TotalCount / iPageSize);
  let firstRenderPage = Math.floor((iPage - 1) / 10) * 10 + 1;
  let lastRenderPage = 1;

  if (totalPage <= iPageTerm) {
    lastRenderPage = totalPage;
  }
  if (totalPage > iPageTerm) {
    lastRenderPage = firstRenderPage + iPageTerm - 1;
    if (currentPage + 10 >= totalPage) {
      lastRenderPage = totalPage;
    }
  }
  renderPagination(firstRenderPage, lastRenderPage); // totalPage

  // 이전이나 다음 페이지가 없는 경우 버튼 막기
  blockButtonsCannotGoToPage();
}

async function addAwardItems() {
  // render pagination
  setPagination(data);

  // 현재 페이지를 버튼 색상에 반영
  checkSelectedPageButton();
}

function renderPagination(firstPage, lastPage) {
  paginationList.innerHTML = '';
  for (let i = firstPage; i <= lastPage; i++) {
    paginationList.innerHTML += String.raw`
      <li class="pagination__button">${i}</li>
    `;
  }
}

function checkSelectedPageButton() {
  // console.log('checkSelectedPageButton');
  // console.log(paginationList.children);
  const buttonList = paginationList.children;

  for (let i = 0; i < buttonList.length; i++) {
    // console.log('buttonList[i].innerHTML', buttonList[i].innerHTML);
    if (currentPage === +buttonList[i].innerHTML) {
      buttonList[i].classList.add('isSelected');
    } else {
      buttonList[i].classList.remove('isSelected');
    }
  }
}

function goToThePage(pageNum) {
  console.log('goToThePage', pageNum);
  // page에 해당하는 data 가져오기
  currentPage = pageNum; // page number 공유

  addAwardItems();
}

function handleNumberButtonClick(event) {
  if (event.target.matches('.pagination__button')) {
    console.log(event.target.innerHTML);
    goToThePage(+event.target.innerHTML);
  }
}

function addAwardItemInit() {
  addAwardItems();
  buttonFirstPage.addEventListener('click', () => goToThePage(1));
  buttonNextPage.addEventListener('click', () => goToThePage(++currentPage));
  buttonPreviousPage.addEventListener('click', () =>
    goToThePage(--currentPage),
  );
  buttonNextTermPage.addEventListener('click', () =>
    goToThePage((currentPage += 10)),
  );
  buttonPreviousTermPage.addEventListener('click', () =>
    goToThePage((currentPage -= 10)),
  );
  paginationList.addEventListener('click', handleNumberButtonClick);
  buttonLastPage.addEventListener('click', () => goToThePage(totalPage));
}

addAwardItemInit();
