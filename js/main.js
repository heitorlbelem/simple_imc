import { AlertError } from "./alert-error.js"
import { Modal } from "./modal.js"
import { calculateIMC, textInputIsNotANumber } from "./utils.js"

const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")
const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()

  const weight = weightInput.value
  const height = heightInput.value
  const weightOrHeightIsNotANumber =
    textInputIsNotANumber(weight) || textInputIsNotANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(Number(weight), Number(height))
  displayResultMessage(result)
}

heightInput.oninput = () => AlertError.close()
weightInput.oninput = () => AlertError.close()

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}
