console.log("child.js");
console.log(window.test123); // 현재(child)의 test123은 부모에서 context에 입력한 것
console.log("window.opener.test123", window.opener.test123); // 부모의 test123에 접근해서 가져온 것

// 부모로 부터 메세지를 받는 이벤트 리스너 - 안됨
window.addEventListener("message", (event) => {
  console.log("event", event);
  console.log("event.data", event.data);
  console.log("event.origin", event.origin);
  console.log("event.source", event.source);
});
