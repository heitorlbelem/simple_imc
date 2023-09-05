export const AlertError = {
  element: document.querySelector(".banner"),
  open() {
    this.element.classList.add("open")
  },
  close() {
    this.element.classList.remove("open")
  },
}
