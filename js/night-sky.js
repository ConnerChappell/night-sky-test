const body = document.querySelector('body')
const modal = document.querySelector('#welcome-modal')
const closeModalBtn = document.querySelector('#close-modal-btn')
const infoText1 = document.querySelector('#info-text1')
const infoText2 = document.querySelector('#info-text2')
// light tab selectors
const lightTab1 = document.querySelector('#light-tab1')
const lightTab2 = document.querySelector('#light-tab2')
const lightTab3 = document.querySelector('#light-tab3')
const lightTab4 = document.querySelector('#light-tab4')

// TODO
// function(s) that change the light tabs to outlines
// click event listeners that call ^ functions ^ 
// maybe create separate add outline class event listener (see highlighted code in movie seat booking)

///////////////////////// functions

const changeLightTab1 = () => {
    if (lightTab1.src.match("../assets/light-tabs/Tab1.svg")) {
        // changes light tab1 to outline, transitions sky background, and adds new info text
        lightTab1.src = "../assets/light-tabs/Tab1-outline.svg"
        lightTab1.classList.add('light-tab-outline')
        body.classList.add('night-sky2')

        infoText1.textContent = "LIGHT POLLUTION LEVEL: 5"
        infoText2.textContent = "This sky represents a City Suburban Sky at a number 7."
    } else {
        // changes light tab1 and night sky back to normal
        lightTab1.src = "../assets/light-tabs/Tab1.svg"
        lightTab1.classList.remove('light-tab-outline')
        body.classList.remove('night-sky2')

        infoText1.textContent = ""
        infoText2.textContent = "On the Bortle scale, the nine-level numeric scale that measures the night sky's brightness, this night sky represents what you would find in Inner Cities at a 9."
    }
}

///////////////////////// event listeners

// click event to display night sky 2 background
lightTab1.addEventListener('click', () => {
    changeLightTab1()
})

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('fade-out')
    
    setTimeout(function() {
        modal.style.display = 'none'
        modal.classList.remove('fade-out')
    }, 300)
})