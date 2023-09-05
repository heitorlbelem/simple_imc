export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title"),
  closeButton: document.querySelector("#close-modal"),
  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
}

Modal.closeButton.onclick = () => Modal.close()
window.addEventListener("keydown", handleKeyDown)

function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close()
  }
}
