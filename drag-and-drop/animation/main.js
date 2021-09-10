let selectedElement;
const container = document.querySelector('#container');

const liList = container.children;
let liArray = Array.prototype.slice.call(liList);
liArray.forEach(item => {
  item.addEventListener('dragstart', onDragStart);
  item.addEventListener('dragenter', onDragEnter);
  item.addEventListener('transitionend', onTransitionEnd);
});
// 순서 변경 test
// let temp = liArray[0];
// liArray[0] = liArray[1];
// liArray[1] = temp;
// liArray.forEach(item => {
//   container.append(item);
// });
// 순서 변경 test end

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
    // event target이 selected가 아니고
    console.log('li === selectedElement', li === selectedElement);
    return;
  }

  if (!event.target.matches('.item')) {
    // event.target이 child인 경우에도 발생하므로 그 경우엔 막아야 함
    console.log(
      `!event.target.matches('.item')`,
      !event.target.matches('.item'),
    );
    return;
  }
  function changePosition() {
    // 서로 위치를 바꿈
    console.log('changePosition');
    // console.log('li in changePosition', li);
    const {
      top: selectedElementTop,
      left,
      height,
    } = selectedElement.getBoundingClientRect();
    const distance = theOtherElementTop - selectedElementTop;
    // selectedElement.style.transition = 'transform 100ms';
    // selectedElement.style.transform = `translateY(${distance})`;
    selectedElement.style = `transition: transform 100ms; transform: translateY(${distance}px)`;
    li.style = `transition: transform 100ms; transform: translateY(${-distance}px)`;

    // 여기에서 DOM 위치를 바꾸지 않으면 다음 애니메이션에서 selectedElement는 위치의 변화가 없음

    // 위치 변경 방법 : liArray에서 selectedElement에 해당하는 index와
    // 이 함수의 event.target(li)의 index를 가져와서
    // 둘의 위치를 바꾸고 다시 모든 item을 container에 append하면 될 것 같다.

    setTimeout(() => {
      const selectedIndex = liArray.indexOf(selectedElement);
      // console.log('selectedIndex', selectedIndex);
      const thisElementIndex = liArray.indexOf(li);
      // console.log('thisElementIndex', thisElementIndex);
      let temp = liArray[selectedIndex];
      liArray[selectedIndex] = liArray[thisElementIndex];
      liArray[thisElementIndex] = temp;
      liArray.forEach(item => {
        // 변경된 순서에 맞게 재 정렬
        console.log('sorted item', item);
        container.appendChild(item);
      });

      //
      // selectedElement.style = `transform: translateY(${0}px)`;
      // li.style = `transform: translateY(${0}px)`;

      // 이게 왜 먼저 실행 될까
      selectedElement.style = ``;
      li.style = ``;
    }, 100);
  }

  changePosition(); // 서로 위치를 바꿈
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
  console.log('ontransitionend');
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
