const refs = {
  search: document.querySelector("#searchInput"),
  list: document.querySelector("#list"),
};

const items = [
  "Купити лимони",
  "Почистити апельсин",
  "Повністю вивчити JavaScript",
];

function createItem(text) {
  const listItemElem = document.createElement("li");
  listItemElem.className = "box";
  listItemElem.textContent = text;

  return listItemElem;
}

function renderItems(filteredItems) {
  refs.list.innerHTML = "";

  for (const item of filteredItems) {
    const itemElem = createItem(item);
    refs.list.append(itemElem);
  }
}

renderItems(items);

const elem = createItem(items[0]);
refs.list.append(elem);

refs.search.addEventListener("input", (e) => {
  const inputText = e.currentTarget.value;

  const filteredItems = [];

  for (const item of items) {
    const match = item.toLowerCase().includes(inputText.toLowerCase());
    if (match) {
      filteredItems.push(item);
    }
  }

  renderItems(filteredItems);
});
