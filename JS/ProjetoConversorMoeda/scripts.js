const convertButton = document.querySelector(".convert-button")
const inputValue = document.querySelector(".input-value")

function convertValues() {
  const inputValue = document.querySelector(".input-value").value
  const dolarToday = 5.2
  
  const convertedValue = inputValue / dolarToday
  console.log(convertedValue)
}

convertButton.addEventListener('click', convertValues)