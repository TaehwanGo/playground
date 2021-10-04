const btnTest = document.querySelector('#btnTest');
const btnTest2 = document.querySelector('#btnTest2');

function download() {
  axios({
    url: 'https://source.unsplash.com/random/500x500',
    // url: 'https://wetubetony.s3.ap-northeast-2.amazonaws.com/video/6a3261c1aae8da977fb6a4fc51dcc116', // CORS
    method: 'GET',
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'image.jpg');
    // link.setAttribute('download', 'video.mp4');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

function downloadTest2() {
  const aTag = document.createElement('a');
  aTag.href =
    // 'https://source.unsplash.com/random/500x500';
    'https://wetubetony.s3.ap-northeast-2.amazonaws.com/video/6a3261c1aae8da977fb6a4fc51dcc116';
  aTag.download = 'testVideo.mp4'; // 안먹힘(same origin URL이 아니기 때문)
  aTag.click();
  aTag.remove();
  console.log('downloadTest2');
}

btnTest.addEventListener('click', download);
btnTest2.addEventListener('click', downloadTest2);
