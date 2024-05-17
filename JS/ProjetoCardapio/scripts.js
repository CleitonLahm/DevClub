const list = document.querySelector("ul");
let myLi = "";
const buttonShowAll = document.querySelector(".show-all");

function showAll() {
  menuOptions.forEach((product) => {
    myLi =
      myLi +
      `
    <li>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p class="item-price">${product.price}</p>
  </li>
    `;

    list.innerHTML = myLi;
  });
}

buttonShowAll.addEventListener("click", showAll);
