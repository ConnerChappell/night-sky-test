const modal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})