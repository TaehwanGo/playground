// loading spinner
const LoadingSpinner = document.createElement('div');
LoadingSpinner.setAttribute('class', 'loading_spinner');

const main = document.querySelector('.main');

function method1() {
  let loadingElementString = String.raw`<div class="loading_spinner"></div>`;

  let loadingElement = document
    .createRange()
    .createContextualFragment(loadingElementString);
  main.appendChild(loadingElement);

  window.setTimeout(() => {
    main.innerHTML = String.raw`
      <div>hello world !</div>
      `;
  }, 2000);
}

function method2() {
  main.appendChild(LoadingSpinner);
  window.setTimeout(() => {
    LoadingSpinner.classList.add('hide');
    main.innerHTML += String.raw`
          <div>hello world !</div>
          `;
  }, 2000);
}

function init() {
  //   method1();
  method2();
}

init();
