const numOfItems = document.querySelectorAll('.items .item').length;
console.log(numOfItems);

function positionItems() {
  let itemsList = document.querySelectorAll('.items .item');
  let indexCounter = 0;
  itemsList.forEach(item => {
    item.style.top = 70 * indexCounter + indexCounter * 10 + 'px';
    item.setAttribute('order', indexCounter + 1);
    indexCounter++;
  });
}

positionItems();
