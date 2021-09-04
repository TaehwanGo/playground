/* Made with love by @fitri
 This is a component of my ReactJS project
 https://codepen.io/fitri/full/oWovYj/ */

function enableDragSort(listClass) {
  const sortableLists = document.getElementsByClassName(listClass);
  // console.log('enableDragSort sortableLists', sortableLists);
  //   console.log('sortableLists.length', sortableLists.length);
  //   for (let i = 0; i < sortableLists.length; i++) {
  //     enableDragList(sortableLists[i]);
  //   }
  //   sortableLists.map(list => enableDragList(list));

  Array.prototype.map.call(sortableLists, list => {
    enableDragList(list);
  });
}

function enableDragList(list) {
  Array.prototype.map.call(list.children, item => {
    enableDragItem(item);
  });
}

function enableDragItem(item) {
  item.setAttribute('draggable', true);
  item.ondrag = handleDrag;
  item.ondragend = handleDrop;
}

function handleDrag(item) {
  //   console.log('item', item);
  const selectedItem = item.target,
    list = selectedItem.parentNode;
  //   const x = event.clientX;
  //   const y = event.clientY;
  const x = item.clientX;
  const y = item.clientY;
  //   console.log('selectedItem', selectedItem); // event.target // drag 중인 아이템은 바뀌지 않음
  //   console.log('list', list); // event.target.parentNode;
  // console.log('x', x); // event.clientX
  // console.log('y', y); // event.clientY

  selectedItem.classList.add('drag-sort-active');
  // console.log(
  //   'document.elementFromPoint(x, y)',
  //   document.elementFromPoint(x, y),
  // );
  let swapItem =
    document.elementFromPoint(x, y) === null
      ? selectedItem
      : document.elementFromPoint(x, y);
  // console.log('swapItem', swapItem); // swapItem은 마우스 포인터에 위치한 element를 반환함

  if (list === swapItem.parentNode) {
    // console.log('swapItem.nextSibling', swapItem.nextSibling);
    if (swapItem === selectedItem.nextSibling) {
      // animation
      // const finalChildAStyle = {
      //   x: null,
      //   y: null,
      // };
      // const finalChildBStyle = {
      //   x: null,
      //   y: null,
      // };
      // console.log(
      //   'selectedItem.getBoundingClientRect()',
      //   selectedItem.getBoundingClientRect(),
      // );
      // console.log(
      //   'swapItem.getBoundingClientRect()',
      //   swapItem.getBoundingClientRect(),
      // );
      // finalChildAStyle.x =
      //   selectedItem.getBoundingClientRect().left -
      //   swapItem.getBoundingClientRect().left;
      // finalChildAStyle.y =
      //   swapItem.getBoundingClientRect().top -
      //   selectedItem.getBoundingClientRect().top;
      // finalChildBStyle.x =
      //   swapItem.getBoundingClientRect().left -
      //   selectedItem.getBoundingClientRect().left;
      // finalChildBStyle.y =
      //   selectedItem.getBoundingClientRect().top -
      //   swapItem.getBoundingClientRect().top;
      // selectedItem.style.transform = `translateY(${
      //   swapItem.getBoundingClientRect().y -
      //   selectedItem.getBoundingClientRect().y
      // }px)`;
      // swapItem.style.transform = `translateY(${
      //   selectedItem.getBoundingClientRect().y -
      //   swapItem.getBoundingClientRect().y
      // }px)`;
      // console.log('change position');
      // selectedItem.classList.add('.move-animation');
    } // animation 끝

    swapItem =
      swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;

    list.insertBefore(selectedItem, swapItem);
  }
}

function handleDrop(item) {
  item.target.classList.remove('drag-sort-active');
  // item.target.classList.remove('.move-animation');
}

// function dragenter(event) {
//   const x = event.clientX;
//   const y = event.clientY;
//   if (event.target === document.elementFromPoint(x, y)) {
//     return;
//   }
//   // transform 필요
// }

// function dragleave(event) {
//   event.target.classList.remove('drag-enter');
// }

(() => {
  enableDragSort('drag-sort-enable');
})();
