const checkLis = document.querySelectorAll(".checkLi");

checkLis.forEach((checkLi) => {
  checkLi.addEventListener("click", () => {
    // checkLi.classList.toggle("checked");
    checked = checkLi.ariaChecked === "true";
    checkLi.ariaChecked = !checked;
    checkLi.innerHTML = checked ? "&#x2713;" : "&#x2715;";
    console.log("checkLi.ariaChecked", checked);
  });
});

const checkBox = document.getElementById("checkBox");
checkBox.checked = true; // default checked value
