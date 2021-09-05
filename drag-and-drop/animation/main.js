let boxId = '';
// let originalLeft;
let originalBoxTop;
let otherBoxTop;
let originBoxElement;

function onDragStart(event) {
  console.log('ondragstart');
  const li = event.target.closest('li');
  const { top, left, height } = li.getBoundingClientRect();
  const originalTop = top;
  const originalLeft = left;
  originBoxElement = li;
  console.log('originalTop', originalTop);
  console.log('originalLeft', originalLeft);
  console.log(
    'event.target.getBoundingClientRect()',
    event.target.getBoundingClientRect(),
  );
  originalBoxTop = top;
  boxId = li.dataset.id;
  console.log('event.target.dataset.id', event.target.dataset.id);
  console.log('boxId', boxId);
}

function onDragEnter(event) {
  console.log('ondragenter');
  const li = event.target.closest('li');
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
    li.style.transform = `translateY(${distance}px)`; // 고정 수치이어야 함
    originBoxElement.style.transform = `translateY(${-distance}px)`;
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

function onPointerEnter(event) {
  console.log('onpointerenter');
}

function onTransitionEnd(event) {
  console.log('ontransitionend');
}

function onTransitionStart() {
  console.log('ontransitionstart');
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
