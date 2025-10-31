const btnElem = document.querySelector("button");

/* btnElem[2].textContent = "test"; */

/* console.log(btnElem[1]); */

/* for (let i = 0; i < btnElems.length; i++) {
  const elem = btnElems[i];

  elem.addEventListener("click", () => {
    console.log("Button click", i);
  });
} */

/* for (let i = 0; i < btnElems.length; i++) {
  const elem = btnElems[i];

  elem.addEventListener("click", () => {
    console.log(e.currentTarget.dataset.message);
  });
} */

// btnElems[0].remove();

/* for (let i = 0; i < btnElems.length; i++) {
  const elem = btnElems[i];

  elem.addEventListener("click", () => {
    e.currentTarget.remove();
  });
} */

/* btnElems[0].textContent = "Test text";
btnElems[0].textContent = "<p> Test text</p>";
btnElems[0].innerHTML = "<p> Test text</p>"; */

const rootElem = document.querySelector("#root");

/* rootElem.innerHTML = 
"<ul><li>List item 1<button id="btn">Click me</button></li><ul>"; */

const listElem = document.createElement("ul");
// console.log(listElem);

// listElem.classList.add("list, list_test");
listElem.className = "list list_test";
listElem.id = "list1";
listElem.dataset.message = "list";
listElem.setAttribute("style", "border-color: red");
listElem.removeAttribute("id");
console.log(listElem.getAttribute("id"));
console.log(listElem.getAttribute("style"));
rootElem.append(listElem);

const listItemElem = document.createElement("li");
listItemElem.textContent = "List item 1";
listItemElem.className = "list__item";
listElem.append(listItemElem);

const listItem1Elem = document.createElement("li");
listItem1Elem.className = "list__item";
listItem1Elem.textContent = "List item 2";
listElem.Elem.append(listItem1Elem);

/* const newElem = listItem1Elem.cloneNode(true);
listElem.append(newElem); */
listElem.append(listItem1Elem);
listElem.prepend(listItem1Elem);
