# Playground

이것저것 만들어 보는 곳
특히, UI 관련 작은 파츠들

<details>
<summary>menu</summary>

## menu

### drop down

drop down menu without javascript

</details>

<details>
<summary>dropdown</summary>

gitlab의 repository 설정하는 부분의 드롭다운을 참고하였음

</details>

<details>
<summary>slider</summary>

## slider

### create react app

- [x] made slider with react-slick
- [ ] what is hammer
- [ ] what is swipeableview

[react에서 window resize 이벤트](https://velog.io/@dblee/React-resize-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B0%9C%EC%83%9D-%EC%8B%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A6%AC%EB%A0%8C%EB%8D%94)

</details>

<details>
<summary>award</summary>

## award

- mainList : 자바스크립트로 리액트 처럼 html 삽입하는 부분.

- [convert string to DOM nodes](https://davidwalsh.name/convert-html-stings-dom-nodes)
</details>

<details>
<summary>form</summary>

## form

- 이미지 업로드
- label만 보여주고 나머지 input 부분을 숨길 수 도 있구나
- [x] formData가 뭔지 알아보기
- 이미지가 포함되면 서버에선 'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryjHlBOsNKdipheLFR' 으로 전달되고
- body엔 값이 없음

### Cypress

- npm install cypress --save-dev
- npx cypress open
- package.json과 같은 위치에 cypress.json을 만들고 baseUrl 설정 가능
- [get](https://docs.cypress.io/api/commands/get)
- [contains](https://docs.cypress.io/api/commands/contains#Examples)

#### 참고

- https://github.com/TaehwanGo/nuber-eats-frontend/blob/master/cypress/support/commands.ts
- https://github.com/TaehwanGo/nuber-eats-frontend/blob/master/cypress/integration/user/edit-profile.ts
- [label만 보여주기](https://velog.io/@minkyeong-ko/HTMLCSSJS-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%A6%84-%EB%82%98%ED%83%80%EB%82%B4%EA%B8%B0-%ED%99%94%EB%A9%B4%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0)
- [이미지 프리뷰](https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded)
- [send form data using axios](https://www.codegrepper.com/code-examples/javascript/axios+file+upload)
- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)
- [javascript FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects)

</details>

<details>
<summary>loading</summary>

### loading spinner while

- innerHTML로 하거나
- 로딩을 넣어놓고 style.display = 'block' or 'none' 으로도 가능
- [loading by style](https://stackoverflow.com/questions/58820229/how-to-show-loading-icon-till-await-finishes)
- [loading by innerHTML](https://stackoverflow.com/questions/60112618/how-can-i-add-a-spinner-in-javascript-while-fetch-async-is-loading-my-data)
</details>

<details>
<summary>speech bubble</summary>

### speech bubble(말풍선)

- :after와 border-color: transparent transparent transparent #ad1e51; 로 구현
- [speech bubble](https://ungdoli0916.tistory.com/753)
</details>

<details>
<summary>pagination</summary>

- [javascript pagination](https://stackoverflow.com/questions/25434813/simple-pagination-in-javascript)
</details>

<details>
<summary>validation</summary>

```html
// html validation
<input
  type="tel"
  id="phone"
  name="phone"
  placeholder="123-45-678"
  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
/>
```

### 참고문헌

- [validation](https://stackoverflow.com/questions/3717793/javascript-file-upload-size-validation)
- [only images allowed](https://stackoverflow.com/questions/3828554/how-to-allow-input-type-file-to-accept-only-image-files)
- [URL.revokeObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL)

</details>

<details>
<summary>image resize</summary>

- https://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/
- https://imagekit.io/blog/how-to-resize-image-in-javascript/

### also good

- https://stackoverflow.com/questions/23945494/use-html5-to-resize-an-image-before-upload

### best

- https://www.therogerlab.com/sandbox/pages/how-to-resize-an-image-using-javascript?s=0ea4985d74a189e8b7b547976e7192ae.291e10470774f14e0f838789eb83b8c9

</details>

<details>
<summary>글자수 제한</summary>

### html에서 event callback함수

```javascript
<textarea
  rows="10"
  class="form-control"
  id="textArea_byteLimit"
  name="textArea_byteLimit"
  onkeyup="fn_checkByte(this)"
></textarea>

// fn_checkByte(obj) => console.log(obj) : <textarea> element
```

대부분 코드가 다 똑같다.

### 참고 문헌

- https://hellcoding.tistory.com/entry/textarea-%EA%B8%80%EC%9E%90%EC%88%98-%EC%A0%9C%ED%95%9C-%EB%B0%94%EC%9D%B4%ED%8A%B8Byte-%EC%A0%9C%ED%95%9C

</details>

<details>
<summary>regex</summary>

### 참고문헌

- [드림코딩 엘리 유튜브, 정규표현식](https://youtu.be/t3M6toIflyQ)
<summary>특수문자 제한</summary>

### 참고 문헌

- https://lemondory.tistory.com/143
- [Emoji 입력 방지 함수|작성자 lovekod2hj](https://blog.naver.com/PostView.nhn?blogId=s0215hc&logNo=222284862836&categoryNo=44&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView)
- https://stackoverflow.com/questions/10992921/how-to-remove-emoji-code-using-javascript
- [정규식표현식 문법](https://heropy.blog/2018/10/28/regexp/)

</details>

<details>
<summary>select 드롭다운</summary>

### 참고 문헌

- [HTML select option](https://zetawiki.com/wiki/HTML_select,_option_%ED%83%9C%EA%B7%B8)
- [select MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/select)

</details>

<details>
<summary>drag and drop</summary>

## tutorial

### 1. draggable attribute

```html
<div draggable="true">draggable</div>
```

- draggable="true"로 지정하면 해당 element를 드래그하면 따라오는 그림이 생긴다

### 2. Handling drag and drop events with javascript

#### drag and drop의 순서 : dragstart -> dragover -> drop

To trigger an action on drag or drop on DOM elements, we’ll need to utilize the Drag and Drop API:

- ondragstart: This event handler will be attached to our draggable element and fire when a dragstart event occurs.
- ondragover: This event handler will be attached to our dropzone element and fire when a dragover event occurs.
- ondrop: This event handler will also be attached to our dropzone element and fire when a drop event occurs.

#### HTML에 event callback함수를 직접 추가하면 동적으로 자바스크립트로 HTML을 넣어도 event callback함수를 쉽게 추가할 수 있다.

```html
<div
  id="draggable-1"
  class="example-draggable"
  draggable="true"
  ondragstart="onDragStart(event)"
>
  draggable
</div>
```

#### function onDrop(event)

- dropzone을 설정 시 원하는 박스에 넣으려면 closest로 타겟을 변경해줘야 함

```javascript
const dropzone = event.target.closest(".example-dropzone");
```

그렇지 않으면 child에 append가 되어버림

### 참고 문헌

- [drag-and-drop-vanillaJS](https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js)

## sorting list with drag and drop

### drag and drop event 이해

- dragstart : 클릭을 꾹 누르고 있으면 dragstart 이벤트가 발생함
- dragover : drag를 할 수 있다는 표시가 생김
- dragenter : 해당 영역에 들어오면 발생
- dragleave : 해당 영역을 벗어나면 발생

### 참고 문헌

- [list sorting with drag and drop](https://stackoverflow.com/questions/44415228/list-sorting-with-html5-dragndrop-drop-above-or-below-depending-on-mouse)

## Drag Sort

### document.elementFromPoint(x, y)

- 화면의 x, y에(relative to the viewport) 위치한 element를 return

### Node.insertBefore()

```javascript
let insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

- The Node.insertBefore() method inserts a node before a reference node as a child of a specified parent node.

### swap animation

- event.clientY : event.target안에서 x, y 값

- element.getBoundingClientRect() : 화면안에서 엘리먼트가 위치한 곳의 좌표

### 참고 문헌

- https://codepen.io/fitri/pen/VbrZQm
- https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
- https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
- [swap animation](https://stackoverflow.com/questions/49488035/animate-dom-elements-swapping)
- https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

## another example

- https://stackoverflow.com/questions/65059542/drag-and-drop-animation-vanillajs

## re ordering using react

- https://dev.to/colinmcd01/drag-drop-re-ordering-using-html-and-react-974

## animation

### 흐름

#### 1. 위치 기억

- drag event 발생한 객체의 위치를 기억

#### 2. 이동

- 시작점과 현재 위치의 차이만큼 시작점에 더한 값이 이동해야할 위치
  - 방법 1
    - 두 거리를 빼서 그 만큼 이동
      - 예상 문제점 이동 중 또 이벤트가 발생되면서 중간으로 수렴
  - 방법 2
    - 고정된 거리만큼 이동
      - 예상 문제점 이동 중 또 이벤트가 발생되면서 중간으로 수렴
      - 단, 위와 아래 방향을 잘 찾을 수 있어야 함
- 두 거리를 뺀 거리만큼 하되, onDragEnter에서 이동이 이루어 지는데 이동 중간에 다시 onDragEnter이벤트가 발생되면서 중간에 수렴하거나 점점 멀어짐
  - transition start와 end에서 flag를 만들어서 애니메이션 중간엔 onDragEnter 함수가 실행되지 않도록 함
    - 우려되는 점 : 빠르게 스크롤을 내릴 경우 비정상 적으로 작동할 가능성이 있음

#### 3. 위치파악

- 드래그 중인 요소가 다른 요소를 만났을 때 그 위치로 원본이 이동

#### 4. 위치 변경

#### 5. 드롭

- 드롭의 순간에서 최종적으로 DOM을 교체하고 애니메이션이 적용된 모슨 요소들의 스타일을 제거
  - DOM 교체를 Node.insertBefore()를 사용할 건지 아닌지 생각해봐야 함

### 분석

```html
<li
  class="item"
  draggable="true"
  ondragstart="onDragStart(event)"
  ondragover="onDragOver(event)"
>
  Draggable Element One
</li>
```

- onDragStart의 이름을 ondragstart로 하면 자기 자신을 실행하면서 Maximum call stack size exceeded 에러가 발생한다.

#### 애니메이션 도중에 모션이 꼬이는 현상

- 큐에 넣고 애니메이션 시간 동안 같은 객체라면 다시 이벤트가 발생되지 않도록 해보면 어떨까

### Element.children vs Node.childNodes

#### Node.childNodes

- 자식 노드가 포함된 NodeList를 반환
- HTMLElement뿐만 아니라 텍스트 등도 포함

#### Element.children

- 현재 요소의 자식 요소가 포함된 HTMLCollection을 반환
- 비 요소 노드는 모두 제외 됨

#### 배열 내 순서 변경

- https://zetawiki.com/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_%EB%B0%B0%EC%97%B4_%EC%88%9C%EC%84%9C_%EB%B0%94%EA%BE%B8%EA%B8%B0
  - temp를 하나 만들어서 둘의 값을 바꿔줌

<!-- #### setTimeout은 비동기라서 아래로 지나간 다음 마지막에 실행 됨

- 만약 setTimeout이랑 transition time이 완벽히 일치 하지 않는다면?
  - transitionEnd event를 사용해서 해보자 -->

### 버그

- 순서가 빠르게 순간적으로 여러번 바뀌는 현상

#### transition end에서 queue에 있는 객체를 하나씩 꺼내와서 실행해야 겠다.

### 참고 문헌

- https://github.com/woowa-techcamp-2020/todo-14/blob/main/doc/Drag-and-Drop-with-Animation.md
- [Element.children vs Node.childNodes](https://hogni.tistory.com/122)

## inflearn과 비교

- 선택하면 on_chosen 클래스가 li에 붙는데 css를 위한 것은 아닌 것 같다

## sortableJS

- 라이브러리 쓰니까 되게 쉽게 되는 것 같아 보이네

### 참고문헌

- https://www.codingnepalweb.com/drag-drop-list-or-draggable-list-javascript/
- https://cdnjs.com/libraries/Sortable

## youtubeHint

- 유튜브 영상 참고해서 만들기

### positionItems

```javascript
function positionItems() {
  let itemsList = document.querySelectorAll(".items .item");
  let indexCounter = 0;
  itemsList.forEach((item) => {
    item.style.top = 70 * indexCounter + indexCounter * 10 + "px";
    // 기본적으로 위치는 동일하지만(absolute) 각각 자바스크립트로 위치를 조정함
    indexCounter++;
  });
}
```

### 좌표 관련

#### offsetTop

- parentNode로 부터 떨어진 거리
- 만약 parentNode가 없다면 body(0, 0)에서 떨어진 거리

#### event.clientY

- 현재 화면(스크롤에 상관없이 상대적인)의 마우스 좌표의 Y값

### Things to do

- [ ] 코드 완전 분석
- [ ] 현재 마우스 포인터가 절반 이상 넘어가야 이동되는데 진입하자마자 이동되도록 변경해야 함

### 완전 분석

- draggable을 true로 주면 mouse up, mouse move가 동작을 안함

  - 우선 지금 따라한 것을 완전히 이해한 다음 draggable을 사용했을 때 구현방법을 생각해보자

- Array.prototype.slice()

- 순서 정렬 : order에 따라 정렬하기 때문에 order를 사용하지 않는다면 쓸 수 없음
- 애니메이션 시간 동안 resetTransition true, false 설정하는 것 : 지속 시간 동안 다시 줍는 것 막음

### 참고문헌

- https://youtu.be/PJYFQYyzRgg

# React

## CRA

- project name에 대문자가 포함될 수 없음

### 참고 문헌

- https://openbase.com/js/react-sortablejs/documentation

### drag and drop

- https://reactjsexample.com/a-react-component-built-on-top-of-sortable/
- @type/sortable

```javascript
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const BasicFunction = () => {
  const [state, setState] = useState([
    { id: 1, name: "shrek1" },
    { id: 2, name: "fiona2" },
    { id: 3, name: "shrek3" },
    { id: 4, name: "fiona4" },
    { id: 5, name: "shrek5" },
    { id: 6, name: "fiona6" },
  ]);

  return (
    <ReactSortable
      list={state}
      setList={setState}
      group="groupName"
      animation={200}
      delay={2}
    >
      {state.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
  );
};

export default BasicFunction;
```

</details>

<details>
<summary>download</summary>

## 비디오 다운로드 구현

### 1. HTML의 download 속성

```html
<!-- 저장하려는 파일이 동일URL인 경우만 가능 -->
<a href="apple.png" download="새로운이름(사과)"></a>
```

- download 속성 없이도 a 태그에 href에 다운로드 URL을 넣어주면 다운로드가 된다
- download 속성 : 파일이 서버안에 있어야 다운로드가 되는 것 같다.
  - download only works for same-origin URLs, or the blob: and data: schemes.
- 브라우저는 `<a>` 태그에 download 속성이 설정되어 있으면 링크가 가리키는 파일을 다운로드한다. 즉, 마치 링크 위에서 마우스 오른쪽 버튼을 클릭하고 "다른 이름으로 링크 저장"을 실행하는 것과 같다.
- img의 경우 same-origin URL이 아니더라도 img를 a태그로 감싸면 download에 부여한 새로운 이름으로 저장할 수 있다.

### 2. Javascript에서 텍스트 파일 생성 및 다운로드

```javascript
downloadFile() {
  const blob = new Blob([this.content], {type: 'text/plain'})
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${this.$store.state.nickname}_${this.title}.md`
  a.click()
  a.remove()
  window.URL.revokeObjectURL(url);
},
```

### 3. Axios 라이브러리르 사용하여 파일 다운로드

#### Blob 이란

- Binary Large Object : 바이너리 데이터를 저장할 수 있는 데이터 유형

#### download code

```javascript
function download() {
  axios({
    url: "https://source.unsplash.com/random/500x500",
    // url: 'https://wetubetony.s3.ap-northeast-2.amazonaws.com/video/6a3261c1aae8da977fb6a4fc51dcc116', // CORS
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "image.jpg");
    // link.setAttribute('download', 'video.mp4');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
```

### 다운로드 시 파일명을 front에서 설정이 가능한가?

- [안된다고 한다 서버에서 header에 content-disposition을 지정해야하는 듯](https://stackoverflow.com/questions/7526849/how-do-i-change-a-filename-on-download-with-javascript)
- [서버 response에서 header에 content-disposition을 설정해줘야 함](https://stackoverflow.com/questions/7428831/javascript-rename-file-on-download/7429406)

### 참고 문헌

- [HTML5 download 속성](https://brightcovekr.wordpress.com/2017/03/16/html5%EC%9D%98-download-%EC%86%8D%EC%84%B1%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%9C-%EB%B9%84%EB%94%94%EC%98%A4-%ED%8C%8C%EC%9D%BC-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EB%A7%81%ED%81%AC-%EC%9E%91/)
- [Javascript를 사용하여 파일 다운로드](https://www.delftstack.com/ko/howto/javascript/javascript-download/)
- [a tag MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a)
- [text download](https://velog.io/@unani92/JS-%EC%89%BD%EA%B3%A0-%EA%B0%84%EB%8B%A8%ED%95%9C-%ED%8C%8C%EC%9D%BC-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

</details>

<details>
<summary>WYSIWYG</summary>

# WYSIWYG

- What you see is what you get
- HTML 에디터
  - 웹에선 게시글 등을 작성할 때 HTML를 직접 작성하지 않아도 글씨 크기를 수정할 수 있고 이미지 등을 업로드하는 것을 도와주는 에디터

## 무작정 따라해보기(summernote)

- 서버는 inflearn-clone-back의 test.ts
- 이미지 업로드는 base64 형태로 인코딩이 되어서 전송됨

```html
<!-- 전송 샘플 -->
<p>테스트123</p>
<p><br /></p>
<p>테스트456</p>
<p><br /></p>
<p><b>테스트</b></p>
<p>
  <b><br /></b>
</p>
<p>
  <font style="background-color: rgb(255, 255, 0);" color="#ff0000"
    >하하호호</font
  >
</p>
<p><br /></p>
<p>
  <!-- 이미지도 전송 가능 -->
  <img
    style="width: 833px;"
    src="data:image/jpeg;base64,/9j/4QFgRXhpZgAATU0AKgAAAAgABwEAAAMAAAABDMAAAAEQAAIAAAAJAAAAYgEBAAMAAAABCZAAAAEPAAIAAAAIAAAAa4dpAAQAAAABAAAAhwESAAMAAAABAAgAAAEyAAI ...
e1+kMITpo/qYPtvbWIt/YweujW6awW//9k="
    data-filename="20200211_162422.jpg"
  />
  <br />
</p>
```

### 의문점

#### 이미지 전송 후 그것을 json으로 다시 전송할 경우 too large 에러가 뜸

```
PayloadTooLargeError: request entity too large
    at readStream (C:\github\inflearn-clone-back\node_modules\raw-body\index.js:155:17)
    at getRawBody (C:\github\inflearn-clone-back\node_modules\raw-body\index.js:108:12)
    at read (C:\github\inflearn-clone-back\node_modules\body-parser\lib\read.js:77:3)
    at urlencodedParser (C:\github\inflearn-clone-back\node_modules\body-parser\lib\types\urlencoded.js:116:5)
    at Layer.handle [as handle_request] (C:\github\inflearn-clone-back\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (C:\github\inflearn-clone-back\node_modules\express\lib\router\index.js:317:13)
    at C:\github\inflearn-clone-back\node_modules\express\lib\router\index.js:284:7
    at Function.process_params (C:\github\inflearn-clone-back\node_modules\express\lib\router\index.js:335:12)
    at next (C:\github\inflearn-clone-back\node_modules\express\lib\router\index.js:275:10)
    at jsonParser (C:\github\inflearn-clone-back\node_modules\body-parser\lib\types\json.js:119:7)
```

- 미리 작성된 양식을 에디터에 넣어서 보여줘야되는데 이건 어떻게 해야하지?
- 업로드를 바로 시켜서 URL로 주고 받아야 되나?

#### 미리 작성된 양식 받는 방법 알아보기

### 참고

- https://youtu.be/IEWKLtWDanU
- https://summernote.org/

## tinyMCE 사용해보기

- https://velog.io/@gth1123/tinyMCE-WYSIWYG-%EC%82%AC%EC%9A%A9

- npx create-react-app tinymce-react-demo -template typescript
- cd tinymce-react-demo
- npm install --save @tinymce/tinymce-react

</details>

<details>
<summary>rerendering, component separation</summary>

# 테스트 환경

- npx create-react-app react_render_practice

## re-rendering

### 참고

- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=pjt3591oo&logNo=221907792621
- https://www.howdy-mj.me/css/emotion.js-intro/

</details>

<details>
<summary>javascript</summary>

### global variable test

- globalNumber라는 값이 변화될 것으로 예상했으나 그렇지 않았다.
- 함수의 parameter로 변수를 받아서 그것의 값을 변경해도 전달한 원래의 변수는 값이 변화되지 않는다.
- 그런데 신기한점은 함수내에서 변수를 선언하지 않았고 단지 전달만 받은 변수가 계속 살아서 값이 누적될 수 있다.

</details>

<details>
<summary>Recoil</summary>

## trophy-quiz

- Recoil 프로젝트 clone해서 코드 살펴보기

## Recoil 강의 정리

- Recoil로 어떻게 global state를 선언하는지
- 선언한 global state를 컴포넌트 안에서 사용하는 방법

### trophy-quiz 동작 설명

- Recoil 관련해선 pages/Landing.tsx만 살펴봄
- Difficulty(select 태그)에 들어가는 option들을 global state로 만들음
  - 이런 옵션들을 다른 페이지에서도 사용해야 하기 때문
  - DB에 저장해서 관리하는게 편하지 않나?
    - db에서 난이도에 대한 string[] 를 가져오고
    - 첫 페이지에서 선택한 난이도를 앱 전체에서 사용하기 위함

### global state

- state directory안에 모여 있음

#### global state 만들기

```typescript
// src/state/QuizDifficulty.ts
import { atom } from "recoil";

export default atom<string | undefined>({
  key: "QuizDifficulty",
  default: undefined,
}); // 앱 전체에서 사용될 첫 페이지에서 선택한 난이도
```

- recoil 라이브러리에서 atom 이란 함수를 가져옴
  - atom
    - 객체를 파라미터로 받는 함수
    - key, default를 가지고 있는 객체
      - key : 유니크한 값이 들어가야 함
        - atom으로 만들어낼 global state에 대해 모두 각각 유니크한 key를 가지고 있어야 함
      - default : 우리가 선언한 global state에 할당하고 싶은 default값

#### 컴포넌트에서 global state활용하기

```typescript
// src/components/Organisms/QuizDifficulty.tsx
import { useRecoilState } from "recoil";
import { QuizDifficultyState } from "src/state";

const QuizDifficulty = () => {
  const [quizDifficulty, setQuizDifficulty] =
    useRecoilState(QuizDifficultyState);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuizDifficulty(e.target.value);
  };

  return (
    <select
      data-testid={DIFFICULTY_SELECT_TEST_ID}
      margin="16px 0px"
      value={quizDifficulty}
      onChange={handleChange}
    >
      {difficulties.map((difficulty) => (
        <option
          key={difficulty}
          value={difficulty == ANY_DIFFICULTY ? undefined : difficulty}
        >
          {difficulty == ANY_DIFFICULTY ? difficulty : difficulty.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default QuizDifficulty;
```

- recoil의 atom으로 만든 global state를 사용하기 위해서 `useRecoilState`라는 hook을 사용
  - useRecoilState에 atom으로 선언한 것을 전달
    - const [quizDifficulty, setQuizDifficulty] =
      useRecoilState(`QuizDifficultyState`);
- useState랑 똑같이 사용하면 됨

## 비동기적인 데이터를 global state로 관리하기

- 비동기적인 global state를 사용해서 렌더링할 때 suspense 사용하기

#### selector

- atom과 같이 global state를 선언하는 함수
- 1. 이미 선언된 atom이 값이 변할 때, 그 atom을 구독하고 있다가 selector에 할당된 함수가 다시 실행
- 2. 서버와 비동기적으로 통신한 response data를 값으로 가질 수 있음

### Quiz app 동작 흐름 -> 코드 분석, 렌더링에서 selector의 활용

- clone했기 때문에 작성자의 서버주소가 어딘지 열려있는지 확인이 안됨

```typescript
// src/components/Organisms/LandingFooter.tsx
import { useResetRecoilState } from "recoil";

import { InitialPropsState } from "src/state";
useResetRecoilState(InitialPropsState);

// InitialPropsState.ts : selector
import { selector } from "recoil";
export default selector<TResponseData>({
  // atom이 아닌 selector로 선언된 global state
  key: "initialOrderState", // atom포함해서 unique한 key이어야 함
  get: async ({ get }) => {
    const queryData = get(QueryDataState); // atom으로 선언된 global state를 구독하고 있다가 변경되면 get: 에 할당된 async함수가 재 실행 됨
    // QueryDataState가 변경 될 때 마다 서버로 부터 받아온 데이터(decodedResponseData)를 return
    if (
      queryData == undefined ||
      window.location.pathname != `/${QUIZ_PAGENAME}`
    )
      return undefined;

    const { amount, difficulty } = queryData;

    const axios = customAxios();
    const response = await axios({
      method: "GET",
      params: {
        amount,
        difficulty,
        type: "multiple",
      },
    });
    const decodedResponseData = {
      ...response.data,
      results: response.data.results.map((quiz: TQuiz) => {
        const decoded_correct_answer = decodeHtml(quiz.correct_answer);
        const decoded_incorrect_answers = quiz.incorrect_answers.map((answer) =>
          decodeHtml(answer)
        );
        return {
          ...quiz,
          question: decodeHtml(quiz.question),
          correct_answer: decoded_correct_answer,
          incorrect_answers: decoded_incorrect_answers,
          examples: addCorrectAnswerRandomly(
            decoded_incorrect_answers,
            decoded_correct_answer
          ),
        };
      }),
    };
    return decodedResponseData;
  },
  set: ({ get, set }) => {
    const amount = get(QuizNumbersState); // atom state를 가져와서
    const difficulty = get(QuizDifficultyState); // atom state를 가져와서

    set(QueryDataState, { amount, difficulty }); // QueryDataState : atom state를 업데이트 해줌 -> get: 에서 QueryDataState를 구독하고 있으므로
    // useResetRecoilState()로 set:을 호출해서 set으로 값을 업데이트 하면
    // selector의 get: 에 할당된 async 함수가 실행 됨
    set(QuizNumbersState, DEFAULT_NUMBERS);
    set(QuizDifficultyState, undefined);
  },
});
```

### selector

- atom과 같이 global state를 선언하는 함수
- 1. 이미 선언된 atom이 값이 변할 때, 그 atom을 구독하고 있다가 selector에 할당된 함수가 다시 실행
- 2. 서버와 비동기적으로 통신한 response data를 값으로 가질 수 있음

#### key : atom포함해서 unique한 key이어야 함

#### get : 함수가 할당될 수 있는 key(property)

- get에 할당된 함수에서 서버와 통신을 함
- get에 할당된 함수의 prop : { get } 으로 atom state를 구독하고 있다가 변경되면 할당된 async 함수가 재실행 됨
- 즉, atom state를 구독하고 있다가 변경되면 서버로 부터 데이터를 다시 불러와서 서버로 부터 온 데이터를 return

#### set

- set property에 어떤 것도 할당되지 않았다면,
  - selector는 자체적으로 setState, atom처럼 setState를 할 수 없음
- selector는 state본체라기 보단 atom의 파편, atom을 무조건 subscribe 해야함
- set은 selector가 어떻게 setState를 하라고 명시해주는 것
- selector의 setState를 하면 set에 할당된 함수가 실행 됨

### useResetRecoilState()

- selector state의 set에 할당된 함수를 실행
  - useResetRecoilState()로 set:을 호출해서 set으로 값을 업데이트 하면
  - QueryDataState : atom state를 업데이트 해줌
  - get: 에서 QueryDataState를 구독하고 있으므로
  - selector의 get: 에 할당된 async 함수가 실행 됨

### recoil의 global state

- tree 처럼 앞의 state가 수정되면 selector도 재실행이 됨

### Suspense

- children으로 호출하는 컴포넌트 중에서 어떤 특정 컴포넌트가 비동기 데이터를 읽어오고 있다면
- 비동기 값의 loading, success, fail 상태 일때
  - loading 상태일 땐, Suspense컴포넌트의 fallback(prop)에 해당하는 컴포넌트를 렌더링해줌
- loading이 끝나고 success 또는 fail이면 다시 children 컴포넌트를 렌더링

```tsx
import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { QUIZ_PAGENAME, RESULT_PAGENAME } from "src/constant";
import {
  ErrorBoundary,
  LandingPage,
  QuizPage,
  ResultsPage,
  ShimmerPage,
} from "src/components/Pages";

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<ShimmerPage />}>
          <Switch>
            <Route path={`/${QUIZ_PAGENAME}`}>
              <Helmet title="Quiz page" />
              <QuizPage />
            </Route>
            <Route path={`/${RESULT_PAGENAME}`}>
              <Helmet title="Result page" />
              <ResultsPage />
            </Route>
            <Route exact path="/">
              <Helmet title="Landing page" />
              <LandingPage />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
```

### opentdb response sample

```json
// https://opentdb.com/api.php?amount=1&difficulty=easy
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which Beatles album does NOT feature any of the band members on it&#039;s cover?",
      "correct_answer": "The Beatles (White Album)",
      "incorrect_answers": ["Rubber Soul", "Abbey Road", "Magical Mystery Tour"]
    }
  ]
}
```

## 참고

- https://youtu.be/t934FOlOMoM
- https://github.com/david718/trophy-quiz
- https://stackoverflow.com/questions/53516594/why-do-i-keep-getting-delete-cr-prettier-prettier
- [Recoil: 비동기 데이터 전역 상태로 관리하기](https://youtu.be/7nwpEiSpPqY)
  - .env : REACT_APP_API_SERVER=https://opentdb.com/api.php

</details>

# nextjs-typescript

- 테스트 할 때 마다 모듈을 설치해야되는 부분이 번거로우므로 여기에서 nextjs 관련 테스트를 모두 진행할 예정
- https://nextjs.org/docs/getting-started
- npx create-next-app@latest --typescript

<details>
<summary>context api</summary>

context api 좋은지 모르겠다
provider로 감싸야 하는 계층구조가 좀 별로다

</details>

<details>
<summary>react query</summary>

### Free API

- https://apipheny.io/free-api/
  > GET : https://catfact.ninja/fact

```json
{
  "fact": "Cats step with both left legs, then both right legs when they walk or run.",
  "length": 74
}
```

## react-query

### Getting started

#### Using Hydration

```js
// _app.jsx
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
```

### 참고

- https://react-query.tanstack.com/guides/ssr#using-nextjs
- https://gingerkang.tistory.com/123

### 읽어 볼 것

- https://radlohead.gitbook.io/typescript-deep-dive/future-javascript/async-await

</details>

<details>
<summary>open api</summary>

### movie : TMDB

- https://developers.themoviedb.org/3/movies/get-movie-details
- image: https://developers.themoviedb.org/3/getting-started/images

</details>

<details>
<summary>open api</summary>

- nextjs-typescript에 구현
- 설명 : https://velog.io/@gth1123/react-infinite-scroll-component

</details>

<details>
<summary>Redux Toolkit TypeScript Example</summary>

# Redux Toolkit TypeScript Example

- https://github.com/vercel/next.js/tree/canary/examples/with-redux
- Next.js 공식사이트의 예제를 리팩토링하고 테스트 코드를 적용해보기
  - https://velog.io/@velopert/using-redux-in-2021
  - https://codesandbox.io/s/redux-todos-with-test-forked-93huy?file=/package.json

</details>

<details>
<summary>git 여러 커밋 합치기</summary>

https://velog.io/@gth1123/git-%EC%97%AC%EB%9F%AC-%EC%BB%A4%EB%B0%8B-%ED%95%A9%EC%B9%98%EA%B8%B0

</details>

<details>
<summary>Tictactoe</summary>

copilot으로 만들어본 Tictactoe 게임

</details>
