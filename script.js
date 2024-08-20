let boxItems = document.querySelector(".player__box");
let items = [...document.querySelectorAll(".player__item")];

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

boxItems.addEventListener("dragover", (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  const siblings = [
    ...boxItems.querySelectorAll(".player__item:not(.dragging)"),
  ];
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  boxItems.insertBefore(draggingItem, nextSibling);
});

boxItems.addEventListener("dragenter", (e) => e.preventDefault());
