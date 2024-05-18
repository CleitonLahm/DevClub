const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const mapAll = document.querySelector(".map-all");
const sumAll = document.querySelector(".sum-all");
const divResult = document.querySelector(".result");
const veganFilter = document.querySelector(".vegan-filter");

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return newValue
}

function showAll(productsArray) {
  divResult.textContent = "";
  let myLi = "";
  productsArray.forEach((product) => {
    myLi += `
    <li>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p class="item-price">${formatCurrency(product.price)}</p>
  </li>
    `;

    list.innerHTML = myLi;
  });
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: formatCurrency((product.price * 0.9).toFixed(2)),
  }));
  showAll(newPrices);
}

function sumAllMenu() {
  list.innerHTML = "";

  const menuTotalValue = menuOptions.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  divResult.textContent = `Total Value: R$ ${formatCurrency(menuTotalValue.toFixed(2))}`;
}

function veganFilterItems() {
  const VeganProducts = menuOptions.filter((product) => product.vegan);
  showAll(VeganProducts);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
mapAll.addEventListener("click", mapAllItems);
sumAll.addEventListener("click", sumAllMenu);
veganFilter.addEventListener("click", veganFilterItems);
