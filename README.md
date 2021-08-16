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

</details>
