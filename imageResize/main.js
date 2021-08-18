const takePictureField = document.querySelector('#takePictureField');
const imgPreview = document.querySelector('#imgPreview');
const imgOrigin = document.querySelector('#imgOrigin');

var resizeImage = function (settings) {
  var file = settings.file;
  var maxSize = settings.maxSize;
  var reader = new FileReader();
  var image = new Image();
  var canvas = document.createElement('canvas');
  var dataURItoBlob = function (dataURI) {
    var bytes =
      dataURI.split(',')[0].indexOf('base64') >= 0
        ? atob(dataURI.split(',')[1])
        : unescape(dataURI.split(',')[1]);
    var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var max = bytes.length;
    var ia = new Uint8Array(max);
    for (var i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
    return new Blob([ia], { type: mime });
  };
  var resize = function () {
    var width = image.width;
    var height = image.height;
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
    }
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(image, 0, 0, width, height);
    // var dataUrl = canvas.toDataURL('image/jpeg');
    var dataUrl = canvas.toDataURL('image/png');
    return dataURItoBlob(dataUrl);
  };
  return new Promise(function (ok, no) {
    if (!file.type.match(/image.*/)) {
      no(new Error('Not an image'));
      return;
    }
    reader.onload = function (readerEvent) {
      image.onload = function () {
        return ok(resize());
      };
      image.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  });
};

// resizeImage({
//   file: takePictureField.files[0],
//   maxSize: 200,
// })
//   .then(function (resizedImage) {
//       // upload resized image
//     console.log('resized image', resizedImage);

//   })
//   .catch(function (err) {
//     console.error(err);
//   });

async function handleOnChange() {
  console.log('before resizing', takePictureField.files[0]);
  imgOrigin.src = URL.createObjectURL(takePictureField.files[0]);
  imgOrigin.onload = function () {
    URL.revokeObjectURL(imgOrigin.src); // free memory
  };
  const config = {
    file: takePictureField.files[0],
    maxSize: 200,
  };
  const resizedImage = await resizeImage(config);
  // upload resized image
  console.log('resized image', resizedImage);
  imgPreview.src = URL.createObjectURL(resizedImage);
  imgPreview.onload = function () {
    URL.revokeObjectURL(imgPreview.src); // free memory
  };
}

takePictureField.addEventListener('change', handleOnChange);
