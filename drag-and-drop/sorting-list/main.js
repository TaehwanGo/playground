var dragging = null;

// document.addEventListener('dragstart', function (event) {
//   dragging = event.target;
//   event.dataTransfer.setData('text/html', dragging);
//   console.log('drag start');
// });

function dragstart(event) {
  dragging = event.target;
  event.dataTransfer.setData('text/html', dragging);
  console.log('drag start');
}

// document.addEventListener('dragover', function (event) {
//   event.preventDefault();
//   console.log('drag over');
// });

function dragover(event) {
  event.preventDefault();
  //   console.log('drag over');
}

// document.addEventListener('dragenter', function (event) {
//   event.target.style['border-bottom'] = 'solid 4px blue';
//   console.log('drag enter');
// });

function dragenter(event) {
  event.target.style['border-bottom'] = 'solid 4px blue';
  console.log('drag enter');
}

// document.addEventListener('dragleave', function (event) {
//   event.target.style['border-bottom'] = '';
//   console.log('drag leave');
// });

function dragleave(event) {
  event.target.style['border-bottom'] = '';
  console.log('drag leave');
}

// document.addEventListener('drop', function (event) {
//   event.preventDefault();
//   event.target.style['border-bottom'] = '';
//   event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
//   console.log('drop');
// });

function drop(event) {
  event.preventDefault();
  event.target.style['border-bottom'] = '';
  event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
  console.log('drop');
}
