const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputValue = document.querySelector(".input-value").value;
  const initialValue = document.querySelector(".currency-value-initial");
  const finalValue = document.querySelector(".currency-value-final");

  const dolarToday = 5.2;
  const euroToday = 6.2;

  if (currencySelect.value == "dolar") {
    finalValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    finalValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
  }

  initialValue.innerHTML = new Intl.NumberFormat("pr-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);
}

function changeCurrency() {
  const currencyName = document.querySelector("#currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = './assets/dolar.svg'
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = './assets/euro.svg'
  }

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
