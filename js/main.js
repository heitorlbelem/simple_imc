import { AlertError } from "./alert-error.js"
import { Modal } from "./modal.js"
import { calculateIMC, textInputIsNotANumber } from "./utils.js"

const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")
const form = document.querySelector("form")

// Event listeners
form.onsubmit = (event) => {
  event.preventDefault()

  const weight = weightInput.value
  const height = heightInput.value
  const showErrorAlert =
    textInputIsNotANumber(weight) || textInputIsNotANumber(height)

  if (showErrorAlert) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(Number(weight), Number(height))
  Modal.message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}
