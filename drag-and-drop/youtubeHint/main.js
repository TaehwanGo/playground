// Globals
let pos = { x: null, y: null }; // Mouse coordinates
let diff = { x: null, y: null }; // So that mouse can drag item on the correct spot
let mouseDown = false; // Needs to be true for logic in 'mouseMove' event listener to be activated
let selectedItem = null; // Allows clicked on item to be tracked in 'mouseMove' event listener
let resetTransition = false; // Cooldown to prevent position errors
let transitionTime = 300; // In milliseconds
const itemsEle = document.querySelector('.items');

const numOfItems = document.querySelectorAll('.items .item').length;
// Set fixed height of items container
// console.log(numOfItems);
itemsEle.style.height = numOfItems * 70 + numOfItems * 10 + 'px';

function positionItems(insertIndex = null) {
  let itemsList = document.querySelectorAll('.items .item');
  itemsList = Array.prototype.slice.call(itemsList);
  itemsList = itemsList.filter(item => item.getAttribute('selected') !== 'yes');
  let indexCounter = 0;
  itemsList.forEach(item => {
    if (insertIndex === indexCounter + 1) {
      indexCounter++;
    }
    item.style.top = 70 * indexCounter + indexCounter * 10 + 'px';
    item.setAttribute('order', indexCounter + 1);
    indexCounter++;
  });
}

positionItems(); // item의 위치를 결정하는 함수

function positionItemsInOrder() {
  let itemsList = document.querySelectorAll('.items .item');
  itemsList = Array.prototype.slice.call(itemsList);
  itemsList = itemsList.sort((a, b) => {
    return Number(a.getAttribute('order')) > Number(b.getAttribute('order'))
      ? 1
      : -1;
  });
  itemsList.forEach((item, index) => {
    if (item.getAttribute('selected') === 'yes') {
      item.removeAttribute('selected');
      item.style.left = '0';
      setTimeout(() => {
        item.style.zIndex = '0';
      }, transitionTime);
    }
    item.style.top = 70 * index + index * 10 + 'px';
    item.setAttribute('order', index + 1);
  });
  resetTransition = true;
  // When transition is over
  setTimeout(() => {
    while (itemsEle.firstChild) {
      itemsEle.removeChild(itemsEle.lastChild);
    }
    itemsList.forEach(item => {
      itemsEle.append(item);
    });
    resetTransition = false;
  }, transitionTime);
}

document.querySelectorAll('.items .item').forEach((item, index) => {
  item.addEventListener('mousedown', e => {
    console.log();
    if (!pos.x || resetTransition) return;
    (mouseDown = true), (selectedItem = item);
    console.log('item.offsetTop', item.offsetTop);
    console.log('pos.y', pos.y); // event.clientY - container.offsetTop
    (diff.y = pos.y - item.offsetTop), (diff.x = pos.x - item.offsetLeft);
    console.log('diff.y', diff.y);
    let offsetY = pos.y - diff.y; // offsetY == item.offsetTop
    let offsetX = pos.x - diff.x;
    item.style.top = offsetY + 'px';
    item.style.left = offsetX + 'px';
    item.style.zIndex = '1000';
    item.setAttribute('selected', 'yes');
  });
  item.addEventListener('mouseup', e => {
    mouseDown = false;
    positionItemsInOrder();
  });
});

addEventListener('mousemove', e => {
  // console.log('e.clientY', e.clientY);
  // console.log('itemsEle.offsetTop', itemsEle.offsetTop);
  (pos.x = e.clientX - itemsEle.offsetLeft),
    (pos.y = e.clientY - (itemsEle.offsetTop - window.scrollY));
  // console.log(pos);
  if (!mouseDown) return;
  let offsetY = pos.y - diff.y; // offsetY == item.offsetTop
  let offsetX = pos.x - diff.x;
  selectedItem.style.top = offsetY + 'px';
  selectedItem.style.left = offsetX + 'px';
  let orderOfSelectedItem = Number(selectedItem.getAttribute('order'));
  // Test for a new position
  if (orderOfSelectedItem !== 1) {
    let beforeItem = document.querySelector(
      `.items .item[order*="${orderOfSelectedItem - 1}"]`,
    );
    console.log('beforeItem', beforeItem);
    let beforeMiddle =
      pos.y < beforeItem.offsetTop + beforeItem.clientHeight / 2;
    if (beforeMiddle) {
      positionItems(orderOfSelectedItem - 1);
      selectedItem.setAttribute('order', orderOfSelectedItem - 1);
      return;
    }
  }
  if (orderOfSelectedItem !== numOfItems) {
    let afterItem = document.querySelector(
      `.items .item[order*="${orderOfSelectedItem + 1}"]`,
    );
    let afterMiddle = pos.y > afterItem.offsetTop + afterItem.clientHeight / 2;
    if (afterMiddle) {
      positionItems(orderOfSelectedItem + 1); // 없으면 위로 갈땐 가지는데 아래로 갈때 한칸씩 감
      selectedItem.setAttribute('order', orderOfSelectedItem + 1); // 없으면 위로 갈땐 가지는데 아래로 갈때 한칸씩 감
      return;
    }
  }
});
