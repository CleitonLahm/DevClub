const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const mapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const divResult = document.querySelector(".result");

function showAll(productsArray) {
  divResult.textContent = "";
  let myLi = "";
  productsArray.forEach((product) => {
    myLi += `
    <li>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p class="item-price">${product.price}</p>
  </li>
    `;

    list.innerHTML = myLi;
  });
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: (product.price * 0.9).toFixed(2),
  }));
  showAll(newPrices);
}

function sumAllMenu() {
  list.innerHTML = "";

  const menuTotalValue = menuOptions.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  divResult.textContent = `Total Value: R$ ${menuTotalValue.toFixed(2)}`;
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
mapAll.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllMenu);
