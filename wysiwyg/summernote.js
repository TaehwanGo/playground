// const formSummernote = document.querySelector('#formSummernote');

// const handleSubmitSummernote = event => {
//   event.preventDefault();
//   console.log('handleSubmitSummernote event', event);
// };

// formSummernote.addEventListener('submit', handleSubmitSummernote);

$(document).ready(function () {
  $('#summernote').summernote({
    placeholder: 'Hello Bootstrap 4',
    tabsize: 2,
    height: 500,
  });
});
