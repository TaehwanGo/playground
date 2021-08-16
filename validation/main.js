const logoImg = document.querySelector('#imgPreview');
const inputAwardLogo = document.querySelector('#inputAwardLogo');
const imgPreview = document.querySelector('#imgPreview');

const inputAwardName = document.querySelector('#inputAwardName');
const awardNameMessage = document.querySelector('#awardNameMessage');

let isAwardNameOk = false;
let isLogoImgOk = false;

function handleMessageColor(ok) {
  if (!ok) {
    awardNameMessage.classList.add('error');
    return;
  }
  awardNameMessage.classList.add('ok');
}

function handleInputAwardLogo() {
  if (inputAwardLogo.files[0].size > 5242880) {
    console.log('5Mb 이하의 이미지만 등록할 수 있습니다.');
    isLogoImgOk = false;
    return;
  }
  inputAwardLogo.files[0];
  console.log('등록가능한 사이즈입니다.');
  isLogoImgOk = true;
  imgPreview.src = URL.createObjectURL(inputAwardLogo.files[0]);
  imgPreview.onload = function () {
    URL.revokeObjectURL(imgPreview.src); // free memory
  };
}

async function handleInputAwardName() {
  const awardName = inputAwardName.value;
  if (!awardName) {
    handleMessageColor(false);
    awardNameMessage.innerHTML = '어워드명을 입력해주세요';
    isAwardNameOk = false;
    return;
  }
  const result = await axios.post('http://localhost:3065/formTest', {
    name: awardName,
  });
  console.log('result', result);
  const { ok, error } = result.data;
  handleMessageColor(ok);
  if (!ok) {
    awardNameMessage.innerHTML = error;
    isAwardNameOk = false;
    return;
  }
  awardNameMessage.innerHTML = '등록 가능한 어워드입니다.';
  isAwardNameOk = true;
}

inputAwardName.addEventListener('focusout', handleInputAwardName);
inputAwardLogo.addEventListener('change', handleInputAwardLogo);

// file size
/*
document
  .getElementById('btnLoad')
  .addEventListener('click', function showFileSize() {
    // (Can't use `typeof FileReader === "function"` because apparently it
    // comes back as "object" on some browsers. So just see if it's there
    // at all.)
    if (!window.FileReader) {
      // This is VERY unlikely, browser support is near-universal
      console.log("The file API isn't supported on this browser yet.");
      return;
    }

    var input = document.getElementById('fileinput');
    if (!input.files) {
      // This is VERY unlikely, browser support is near-universal
      console.error(
        "This browser doesn't seem to support the `files` property of file inputs.",
      );
    } else if (!input.files[0]) {
      addPara("Please select a file before clicking 'Load'");
    } else {
      var file = input.files[0];
      addPara('File ' + file.name + ' is ' + file.size + ' bytes in size');
    }
  });

function addPara(text) {
  var p = document.createElement('p');
  p.textContent = text;
  document.body.appendChild(p);
}
*/
//5,242,880
