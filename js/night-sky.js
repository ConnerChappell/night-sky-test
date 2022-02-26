const body = document.querySelector('body')
const modal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
// light tab selectors
const lightTab1 = document.querySelector('#light-tab1')
const lightTab2 = document.querySelector('#light-tab2')
const lightTab3 = document.querySelector('#light-tab3')
const lightTab4 = document.querySelector('#light-tab4')


///////////////////////// event listeners

// click event to display night sky 2
lightTab1.addEventListener('click', () => {
    body.classList.add('night-sky2')
})

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('fade-out')
    
    setTimeout(function() {
        modal.style.display = 'none'
        modal.classList.remove('fade-out')
    }, 500)
})