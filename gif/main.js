const container = document.getElementById("container");

const img = document.createElement("img");
img.src = "./giphyonce.gif";

container.appendChild(img);

// play again
container.addEventListener("click", () => {
  img.src = "./giphyonce.gif";
});

/**
 * 결론 무한 루프를 도는 gif는 브라우저에서 한번만 재생할 수 없다
 * 한번만 재생되는 gif를 만들어야 한다
 * https://ezgif.com/loop-count
 */
