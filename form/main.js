const testBtn = document.querySelector('#testBtn');
const testForm = document.querySelector('#testForm');
const testInputText = document.querySelector('#testInputText');
const testInputImage = document.querySelector('#testInputImage');
const header = document.querySelector('.header');

async function postTest(data) {
  // 버튼 클릭 시 AJAX 테스트
  try {
    const result = await axios.post('http://localhost:3065/formTest', data);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// testBtn.addEventListener('click', postTest);

async function handleSubmit(e) {
  e.preventDefault();
  let formData = new FormData();
  formData.append('textName', testInputText.value);
  formData.append('testImage', testInputImage.files[0]);

  const result = await postTest(formData);
  const { content } = result?.data;

  console.log('submit form result', content);
  header.innerHTML = content;
}

testForm.addEventListener('submit', handleSubmit);
