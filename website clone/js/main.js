const modal = document.querySelector('.modal')
const loginbutton = document.querySelector('.login-button')
const closebutton = document.querySelector('.close')

loginbutton.addEventListener('click', openModal)
closebutton.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal()
  }
}