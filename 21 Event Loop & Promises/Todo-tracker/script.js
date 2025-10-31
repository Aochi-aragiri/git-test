function renderItems(filteredItems) {
  refs.list.innerHTML = "";

  const itemsElems = filteredItems.map((item) => createItemElem(item));
  refs.list.append(...itemsElems);
}

function deleteItem(itemId) {
  items = items.filter((item) => item.id !== itemId);
  renderItems(getFilteredItems());
  persistItems();
}

function updateItem(itemId, isCompleted) {
  items = items.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        isCompleted,
      };
    } else {
      return item;
    }
  });

  renderItems(getFilteredItems());
  persistItems();
}

function getFilteredItems() {
  return items.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );
}

function handleAdd() {
  const newItemText = refs.itemInput.value.trim();

  addItem(newItemText);

  refs.itemInput.value = "";

  renderItems(getFilteredItems());

  persistItems();
}

renderItems(getFilteredItems());

refs.search.addEventListener("input", (e) => {
  const inputText = e.currentTarget.value;
  search = inputText;

  renderItems(getFilteredItems());
});

refs.exportBtn.addEventListener("click", () => {
  console.log(items);
});

refs.addBtn.addEventListener("click", handleAdd);

function handleDeleteClick(e) {
  const listItemElem = e.target.closest(".js-list-item");
  const itemId = Number(listItemElem.dataset.itemid);
  deleteItem(itemId);
}

function handleCheckboxChange(e) {
  const checked = e.target.checked;
  const listItemElem = e.target.closest(".js-list-item");
  const itemId = Number(listItemElem.dataset.itemid);

  updateItem(itemId, checked);
}

refs.list.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-delete-btn")) {
    handleDeleteClick(e);
  }
});

refs.list.addEventListener("input", (e) => {
  if (e.target.classList.contains("js-item-checkbox")) {
    handleCheckboxChange(e);
  }
});

function handleKeydown(e) {
  if (e.code === "KeyS" && e.ctrlKey) {
    e.preventDefault();

    handleAdd();
  }
}

function setupShortcuts() {
  window.removeEventListener("keydown", handleKeydown);
  window.addEventListener("keydown", handleKeydown);
}

setupShortcuts();
setupShortcuts();
