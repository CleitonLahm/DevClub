const convertButton = document.querySelector(".convert-button")
const inputValue = document.querySelector(".input-value")


function convertValues() {
  const inputValue = document.querySelector(".input-value").value
  const initialValue = document.querySelector(".currency-value-initial")
  const finalValue = document.querySelector(".currency-value-final")
  
  const dolarToday = 5.2
  const convertedValue = inputValue / dolarToday

  initialValue.innerHTML = inputValue
  finalValue.innerHTML = convertedValue
  

}

convertButton.addEventListener('click', convertValues)

