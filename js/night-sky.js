///////////////////////// selectors
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

///////////////////////// functions

// night sky phase 2 functions
const changeLightTab1 = () => {
    // if light tab 1 = solid
    if (lightTab1.src.match("../assets/light-tabs/Tab1.svg")) {
        // changes light tab1 to outline
        lightTab1.src = "../assets/light-tabs/Tab1-outline.svg"
        lightTab1.classList.add('light-tab-outline')
    // if light tab 1 = outline and light tab 2 = outline
    } else if (lightTab1.src.match("../assets/light-tabs/Tab1-outline.svg") && lightTab2.src.match("../assets/light-tabs/Tab2-outline.svg")) {
        // change light tab 1 and 2 to solid and night sky to phase 1
        lightTab1.src = "../assets/light-tabs/Tab1.svg"
        lightTab1.classList.remove('light-tab-outline')
        lightTab2.src = "../assets/light-tabs/Tab2.svg"
        lightTab2.classList.remove('light-tab-outline')
        changeNightSky2()
    } else {
        // changes light tab1 back to solid
        lightTab1.src = "../assets/light-tabs/Tab1.svg"
        lightTab1.classList.remove('light-tab-outline')
    }
}
const changeNightSky2 = () => {
    if (lightTab1.classList.contains('light-tab-outline')) {
        // changes night sky background to phase 2
        body.classList.add('night-sky2')
    } else {
        // changes night sky background to phase 1
        body.classList.remove('night-sky2')
    }
}
const changeInfoText2 = () => {
    if (body.classList.contains('night-sky2')) {
        // changes info text to night sky phase 2 text
        infoText1.textContent = "LIGHT POLLUTION LEVEL: 5"
        infoText2.textContent = "This sky represents a City Suburban Sky at a number 7."
    } else {
        // changes info text back to night sky phase 1
        infoText1.textContent = ""
        infoText2.textContent = "On the Bortle scale, the nine-level numeric scale that measures the night sky's brightness, this night sky represents what you would find in Inner Cities at a 9."
    }
}

// night sky phase 3 functions
const changeLightTab2 = () => {
    // if light tab2 = solid and light tab 1 = solid
    if (lightTab2.src.match("../assets/light-tabs/Tab2.svg") && lightTab1.src.match("../assets/light-tabs/Tab1.svg")) {
        // changes light tabs 1 and 2 to outline
        changeLightTab1()
        lightTab2.src = "../assets/light-tabs/Tab2-outline.svg"
        lightTab2.classList.add('light-tab-outline')
    // if light tab 2 = outline and light tab 1 = outline
    } else if (lightTab2.src.match("../assets/light-tabs/Tab2-outline.svg") && lightTab1.src.match("../assets/light-tabs/Tab1-outline.svg")) {
        // changes light tab2 back to solid and night sky to phase 2
        lightTab2.src = "../assets/light-tabs/Tab2.svg"
        lightTab2.classList.remove('light-tab-outline')
        changeNightSky2()
    // if light tab 2 = solid and light tab 1 = outline
    } else if (lightTab2.src.match("../assets/light-tabs/Tab2.svg") && lightTab1.src.match("../assets/light-tabs/Tab1-outline.svg")){
        // changes light tab2 back to outline and night sky to phase 3
        lightTab2.src = "../assets/light-tabs/Tab2-outline.svg"
        lightTab2.classList.add('light-tab-outline')
        changeNightSky3()
    }
}
const changeNightSky3 = () => {
    if (lightTab2.classList.contains('light-tab-outline')) {
        // changes night sky background to phase 3
        body.classList.add('night-sky3')
    } else {
        // changes night sky background to phase 2
        body.classList.remove('night-sky3')
    }
}
const changeInfoText3 = () => {
    if (body.classList.contains('night-sky3')) {
        // changes info text to night sky phase 3 text
        infoText1.textContent = "LIGHT POLLUTION LEVEL: 6"
        infoText2.textContent = "This would be a 6 for a Bright Suburban Sky."
    } else {
        // changes info text back to night sky phase 2
        infoText1.textContent = "LIGHT POLLUTION LEVEL: 5"
        infoText2.textContent = "This sky represents a City Suburban Sky at a number 7."
    }
}

///////////////////////// event listeners

// click event to display night sky phase 2
lightTab1.addEventListener('click', () => {
    changeLightTab1()
    changeNightSky2()
    changeInfoText2()
})
// click event to display night sky phase 3
lightTab2.addEventListener('click', () => {
    changeLightTab2()
    changeNightSky3()
    changeInfoText3()
})

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('fade-out')
    
    setTimeout(function() {
        modal.style.display = 'none'
        modal.classList.remove('fade-out')
    }, 300)
})