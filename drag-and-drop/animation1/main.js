const container = document.querySelector('#container');

const transitionTime = 300; // ms

let selectedElement;
let beforeEnterElement; // icon이면 실행 안되게

const liList = container.children;
let liArray = Array.prototype.slice.call(liList);
liArray.forEach(item => {
  item.addEventListener('dragstart', onDragStart);
  item.addEventListener('dragenter', onDragEnter);
  item.addEventListener('transitionend', onTransitionEnd); // 여기가 아닌 onDragEnter 에서
  item.addEventListener('drop', onDrop);
});
/* // 순서 변경 test 1
let temp = liArray[0];
liArray[0] = liArray[1];
liArray[1] = temp;
liArray.forEach(item => {
  container.append(item);
});
// 순서 변경 test1 end */

// 순서 변경 test 2
// const firstChild = container.children[0];
// const secondChild = container.children[1];
// const thirdChild = container.children[2];
// secondChild.after(firstChild); // distance> 0
// secondChild.before(thirdChild); // distance < 0
// 순서 변경 test2 end

function onDragStart(event) {
  console.log('ondragstart');
  const li = event.target.closest('li');
  const { top, left, height } = li.getBoundingClientRect();
  selectedElement = li;
}

function onDragEnter(event) {
  // 자신의 child한테 들어갈 때에도 발생
  console.log('ondragenter');

  // console.log(`event.target.matches('.item')`, event.target.matches('.item'));
  const li = event.target.closest('li');
  const { top: theOtherElementTop, left, height } = li.getBoundingClientRect();
  // console.log('li top', top);

  // console.log('currentEventTarget', li);
  if (li === selectedElement) {
    // event target이 selectedElement 이면 함수 종료
    console.log('li === selectedElement', li === selectedElement, event.target);
    return;
  }

  if (!event.target.matches('.item')) {
    // event.target이 child인 경우에도 발생하므로 그 경우엔 막아야 함
    beforeEnterElement = event.target;
    console.log(
      `!event.target.matches('.item')`,
      !event.target.matches('.item'),
    );
    return;
  }

  if (beforeEnterElement) {
    console.log('beforeEnterElement.tagName', beforeEnterElement.tagName);
    if (beforeEnterElement.tagName === 'I') {
      return;
    }
  }

  beforeEnterElement = event.target;
  // the other li안의 icon box에서 나갈때 한번더 인식하는 것 같다. ondragenter를
  console.log('before run changPosition event.target', event.target);
  changePosition(li, theOtherElementTop); // 서로 위치를 바꿈
}

function changePosition(li, theOtherElementTop) {
  // li : theOtherElement
  // 서로 위치를 바꿈 selected <-> theOtherElement
  console.log('changePosition');
  // console.log('li in changePosition', li);
  const {
    top: selectedElementTop,
    left,
    height,
  } = selectedElement.getBoundingClientRect();
  const distance = theOtherElementTop - selectedElementTop;
  const absDist = Math.abs(distance);
  if (absDist < 59 || absDist > 60) {
    // 임시 test용
    console.log('absDist', absDist);
    return;
  }

  console.log('distance', distance);
  // animation
  // selectedElement.style = `transition: transform ${transitionTime}ms; transform: translateY(${distance}px)`;
  // li.style = `transition: transform ${transitionTime}ms; transform: translateY(${-distance}px)`;

  // 여기에서 DOM 위치를 바꾸지 않으면 다음 애니메이션에서 selectedElement는 위치의 변화가 없음

  // 위치 변경 방법 : liArray에서 selectedElement에 해당하는 index와
  // 이 함수의 event.target(li)의 index를 가져와서
  // 둘의 위치를 바꾸고 다시 모든 item을 container에 append하면 될 것 같다.
  if (distance > 0) {
    // 위에서 아래로 내려올 때
    selectedElement.before(li);
    selectedElement.style = `transform: translateY(${-distance}px)`;
    li.style = `transform: translateY(${distance}px)`;
  } else {
    // 아래에서 위로 올라갈 때
    selectedElement.after(li);
    selectedElement.style = `transform: translateY(${-distance}px)`;
    li.style = `transform: translateY(${distance}px)`;
  }
  // 복사 후

  // let temp;
  // temp = li;
  // li = selectedElement;
  // selectedElement = temp;
  // li = selectedElement; // test nothing changed

  // setTimeout(() => {
  //   // const selectedIndex = liArray.indexOf(selectedElement);
  //   // // console.log('selectedIndex', selectedIndex);
  //   // const thisElementIndex = liArray.indexOf(li);
  //   // // console.log('thisElementIndex', thisElementIndex);
  //   // let temp = liArray[selectedIndex];
  //   // liArray[selectedIndex] = liArray[thisElementIndex];
  //   // liArray[thisElementIndex] = temp;
  //   // liArray.forEach(item => {
  //   //   // 변경된 순서에 맞게 재 정렬
  //   //   // console.log('sorted item', item);
  //   //   container.appendChild(item);
  //   // });

  //   // selectedElement.style = ``;
  //   // li.style = ``;

  //   selectedElement.style = `transition: transform ${transitionTime}ms; transform: translateY(${0}px)`;
  //   li.style = `transition: transform ${transitionTime}ms; transform: translateY(${0}px)`;
  //   beforeEnterElement = undefined;
  // }, transitionTime);

  // selectedElement.style.transition = `transform ${transitionTime}ms;`;
  // selectedElement.style.transform = `translateY(${0}px)`;
  // selectedElement.classList.add('animation');
  // li.style.transition = `transform ${transitionTime}ms;`;
  // li.style.transform = `translateY(${0}px)`;
  // li.classList.add('animation');
  beforeEnterElement = undefined;
  // beforeEnterElement = undefined;
  addAnimation(li);
}

function addAnimation(li) {
  selectedElement.classList.add('animation'); // 얘는 css가 나중에 적용되었고
  li.classList.add('animation'); // 얘는 css가 먼저 적용 됨 - 애니메이션 적용 안됨
}

function onDragOver(event) {
  event.preventDefault(); // drop이 가능하다는 표시를 해줌
  // console.log('ondragover');
}

// function ondragleave(event) {
//   console.log('ondragleave');
// }

function onDrop(event) {
  console.log('ondrop', event.target);
  selectedElement = undefined;
}

// function onPointerEnter(event) {
//   console.log('onpointerenter');
// }

function onTransitionEnd(event) {
  console.log('ontransitionend event.target', event.target);
  beforeEnterElement = undefined;
  event.target.style = '';
  event.target.classList.remove('animation');
}

function onTransitionStart(event) {
  console.log('ontransitionstart target', event.target);
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

// window.addEventListener('transitionstart', onTransitionStart); // 각 객체에 박아야 될 듯
// window.addEventListener('transitionend', onTransitionEnd);

function test() {
  // 이벤트 콜백함수는 독립적으로 실행된다. 중간에 완료되기 전에 실행한다고 해도 queue에 쌓여서 순차적으로 실행됨
  setTimeout(() => {
    console.log('test 3s', new Date());
    // console.log('test 3s');
  }, 3000);
}
