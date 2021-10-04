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

</details>
