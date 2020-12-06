function hoverItem() {

  const priceBox = document.querySelector(".section-price__box"),
    priceItem = priceBox.querySelectorAll(".section-price__box__item"),
    priceButton = priceBox.querySelectorAll(".start-button");


  function activeItem(i = 0) {
    priceItem[i].classList.add("ACTIVE");
    priceButton[i].classList.add("active-button");
  }

  function noActiveItem() {
    priceItem.forEach(item => {
      item.classList.remove("ACTIVE");
    });
    priceButton.forEach(item => {
      item.classList.remove("active-button");
    });
  }

  activeItem();

  priceItem.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      noActiveItem();
      activeItem(index);
    });
  });
}
export default hoverItem;