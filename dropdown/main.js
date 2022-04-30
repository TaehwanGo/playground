const listTitle = document.querySelector(".list__title");
const list = document.querySelector(".list");

function handleClick() {
  const isExpended = list.classList.contains("expend");
  console.log("isExpended", isExpended);
  if (isExpended) {
    list.classList.remove("expend");
    return;
  }

  list.classList.add("expend");
}

listTitle.addEventListener("click", handleClick);
