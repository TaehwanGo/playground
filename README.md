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
const dropzone = event.target.closest('.example-dropzone');
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

### 참고 문헌

- https://github.com/woowa-techcamp-2020/todo-14/blob/main/doc/Drag-and-Drop-with-Animation.md

## sortableJS

- 라이브러리 쓰니까 되게 쉽게 되는 것 같아 보이네

### 참고문헌

- https://www.codingnepalweb.com/drag-drop-list-or-draggable-list-javascript/
- https://cdnjs.com/libraries/Sortable

</details>
