const modal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('fade-out')
    
    setTimeout(function() {
        modal.style.display = 'none'
        modal.classList.remove('fade-out')
    }, 500)
})