// Variables
const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")
const form = document.querySelector("form")

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title"),
  closeButton: document.querySelector("#close-modal"),
  open() {
    this.wrapper.classList.add("open")
  },
  close() {
    this.wrapper.classList.remove("open")
  },
}

// Functions
const calculateIMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2)
}

// Event listeners
form.onsubmit = (event) => {
  event.preventDefault()

  const weight = Number(weightInput.value)
  const height = Number(heightInput.value)
  const result = calculateIMC(weight, height)

  Modal.message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}

Modal.closeButton.onclick = () => Modal.close()
