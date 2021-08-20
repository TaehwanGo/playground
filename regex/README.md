## 정규표현식(Regex)

/패턴(pattern)/옵션(flag)

### 옵션(flag)

- g : global => 전역검색
  - 매칭되는 다수의 결과값을 기억
- i : case insensitive => 대소문자 없는 검색
- m : multi-line => 다중행(여러줄) 검색
- s : single line => .에 개행 문자도 매칭(ES2018) ??
- u : unicode => 유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급
- y : sticky => sticky 검색을 수행. 문자열의 현재 위치부터 검색을 수행

### Groups and ranges

#### /Hi|Hello/gm

- "Hi" 또는(|) "Hello"를 전역 여러줄 검색 후 기억

#### 소괄호 : () => 그룹 지정

- /(Hi|Hello)|(And)/gm
- /gr(e|a)y/gm
  - gr로 시작하고 e또는 a가 중간에 들어가며 y로 끝나는 문자 : grey | gray

#### ?: => 그룹 지정해제 - 찾지만 기억하지 않음

- /gr(?:e|a)y/gm

#### 대괄호 [] => 대괄호 안에 포함된 것은 모두 또는( | ) 으로 묶인 것이나 다름없음

- /gr(e|a|d)y/gm == /gr[ead]y/gm
- 그룹은 지정 안됨
- /gr[a-f]y/gm : gr로 시작하면서 가운데가 a부터 f까지 포함된 y로 끝나는 것들
  - gray, grby, grcy, ... , grfy
- /[a-zA-Z0-9]/gm
  - a부터z까지 그리고 A부터 Z까지 그리고 0부터 9까지
- /[^a-za-z0-9]/gm
  - 대괄호 조건을 제외 한 나머지 : ^ 기호 사용

### Quantifiers : 수량 관련 문법

- ?
  - /gra?y/gm
    - 문자열 중 a는 없는 경우, 있는 경우 모두 선택 함
- - : 없거나 있거나 많거나
  * /gra\*y/gm
- - : 하나 있거나 그 이상의 것
- /gra{2, 3}y/ : a가 두번 또는 세번 포함된 것
  - /gra{2,}y/ : 최소 2번 이상 a가 포함된 것

### Boundary-type

- \b
  - /\bYa/gm : 단어 중에서 단어 앞에서 Ya가 포함된 문자열만 선택
  - /Ya\b/gm : 단어 중 Ya가 단어 뒤에 포함 된 것들
- \B : \b의 반대
  - /Ya\B/gm : 단어 중에서 Ya가 단어 뒤에 포함된 것이 아닌 Ya들을 선택
- ^ : 문장의 시작
  - /^Ya/gm : 문장에서 Ya로 시작하는 문장의 Ya를 선택
- & : 문장의 끝 : ^의 반대

### Character classes

- /./gm : 모든 문자열 선택
- /\./gm : 특수 문자를 찾을 땐 역슬래시(\) 를 사용

- \d : digit 숫자, 숫자 전부
- \D : 숫자가 아닌 모든 것들

- \w : 모든 문자열 : a-zA-z0-9
- \W : 문자열을 제외한 나머지 모든 것 : 특수문자나 띄어쓰기 등
- \s : 모든 띄어쓰기
- \S : 띄어쓰기를 제외한 모든 것

### 연습

#### 전화번호 찾기

- /\d{2,3}[-.\s]\d{3}[- .]\d{4}/gm

#### email 선택

- /\w.{1,}[@]\w.{1,}/gm : 내가 작성한 정규표현식
- /[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9.]+/gm : 엘리의 답안

#### youtube / 뒤 아이디만

- http(s?):\/\/(www.)?youtu.be\/{1} : 주소만 선택하고 해당 줄의 나머지를 어떻게 선택하는지 모르겠음
- 그룹으로 다 선택해놓고 ?:으로 캡쳐하지 않는다고 표시하면 됨
  - /(?:https?:\/\/)?(?:www\.)?youtu.be\/([a-zA-Z0-9-]{11})/gm

### 자바스크립트에서 활용

```javascript
const regex = /(?:https?:\/\/)?(?:www\.)?youtu.be\/([a-zA-Z0-9-]{11})/; // 그룹으로 제외 할 땐 g 플래그를 붙이면 안되네
const url = 'https://www.youtu.be/-ZClicWm0zM';
url.match(regex);
```

### 더 연습할 수 있는 사이트

- [RegexOne](https://regexone.com/)

### 참고 문헌

- https://youtu.be/t3M6toIflyQ
- https://github.com/dream-ellie/regex
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
