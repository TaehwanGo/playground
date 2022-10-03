const fetchData = async () => {
  const res = await axios.get("http://localhost:4000/api/v1/memo");
  return res.data;
};

const init = async () => {
  const data = await fetchData();
  window.test123 = data;

  const context = window.open("./child.html", "child", "width=400,height=400");

  context.test123 = "Hello World";

  // 팝업 창 종료 테스트
  // setTimeout(() => {
  //   context.close();
  // }, 3000);

  // 자식창으로 메세지 전송 - 안됨
  context.postMessage("Hello World", "*"); // error

  setTimeout(() => {
    context.postMessage("asdf", "test message");
  }, 3000);
};

init();
