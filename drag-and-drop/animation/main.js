let boxId = '';
// let originalLeft;
let originalBoxTop;
let otherBoxTop;
let originBoxElement;
let otherBoxElement;
let isTransition = false;
const container = document.querySelector('#container');

function onDragStart(event) {
  console.log('ondragstart');
  const li = event.target.closest('li');
  const { top, left, height } = li.getBoundingClientRect();
  originBoxElement = li;
  originalBoxTop = top;
  boxId = li.dataset.id;
  console.log('event.target.dataset.id', event.target.dataset.id);
  console.log('boxId', boxId);
}

function onDragEnter(event) {
  if (isTransition) {
    return;
  }
  console.log('ondragenter');
  const li = event.target.closest('li');
  otherBoxElement = li;
  const { top, left, height } = li.getBoundingClientRect();
  otherBoxTop = top;
  //   console.log('event.target.dataset.id', li.dataset.id);
  //   console.log('boxId', boxId);
  const distance = originalBoxTop - otherBoxTop;
  if (li.dataset.id !== boxId) {
    // 자기 자신이 아닐 때
    console.log('다른 박스에 진입');
    console.log('distance', distance);
    // 이동 중 다시 이동하지 않도록 해야 함
    originBoxElement.style.transition = `transform 300ms`;
    li.style.transform = `translateY(${distance}px)`;
    originBoxElement.style.transform = `translateY(${-distance}px)`;
    // li.style.transform = `translate3d(0, ${distance}px, 0)`;
    // originBoxElement.style.transform = `translate3d(0, ${-distance}px, 0)`;
    // console.log('originBoxElement', originBoxElement);
  }
}

function onDragOver(event) {
  event.preventDefault(); // drop이 가능하다는 표시를 해줌
  //   console.log('ondragover');
}

// function ondragleave(event) {
//   console.log('ondragleave');
// }

function onDrop(event) {
  console.log('ondrop');
}

// function onPointerEnter(event) {
//   console.log('onpointerenter');
// }

function onTransitionEnd(event) {
  // console.log('onTransitionEnd event target', event.target);
  console.log('ontransitionend');
  isTransition = false;
  // DOM 순서 바꾸기
  if (
    originBoxElement.getBoundingClientRect().top >=
    otherBoxElement.getBoundingClientRect().top
  ) {
    container.insertBefore(otherBoxElement, originBoxElement);
  } else {
    container.insertBefore(originBoxElement, otherBoxElement);
  }
  originBoxElement = event.target;

  originalBoxTop = 0;
  otherBoxTop = 0;
  // originBoxElement.style.transition = null;
  originBoxElement.style.transform = `translateY(0px)`;
  otherBoxElement.style.transform = `translateY(0px)`;
  console.log(
    'originBoxElement top',
    originBoxElement.getBoundingClientRect().top,
  );
  console.log(
    'otherBoxElement top',
    otherBoxElement.getBoundingClientRect().top,
  );

  // container.insertBefore(otherBoxElement, originBoxElement);
}

function onTransitionStart() {
  console.log('ontransitionstart');
  isTransition = true;
}

// function onpointermove(event) {
//   console.log('onpointermove');
// }

function onPointerDown(event) {
  console.log('onpointerdown');
}

function onPointerUp(event) {
  console.log('onpointerup');
}

window.addEventListener('transitionstart', onTransitionStart);
window.addEventListener('transitionend', onTransitionEnd);
