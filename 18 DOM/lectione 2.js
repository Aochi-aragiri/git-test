const btnElem = document.querySelector("#btn");

const colors = ["#E5FFDE", "#BBCBCB", "#9590AB", "#634866", "#18020C"];

btnEmel.addEventListener("click", e);
btnElem.addEventListener("click", () => {
  console.log("Click");
});

btnElem.addEventListener("click", () => {
  console.log("Click1");
});
console.dir(btnElem);

btnElem.addEventListener("click", (e) => {
  console.log(e.target);
  document.body.style.backgroundColor = "#000";
});
