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

// resets body background class to have nothing
const removeAllNightSkyClasses = () => {
    body.classList.remove('night-sky5', 'night-sky4', 'night-sky3', 'night-sky2', 'night-sky1')
}

// functions that change light tabs to outline or solid
const makeLightTab1Outline = () => {
    lightTab1.src = '../assets/light-tabs/Tab1-outline.svg'
    lightTab1.classList.add('light-tab-outline')
}
const makeLightTab1Solid = () => {
    lightTab1.src = '../assets/light-tabs/Tab1.svg'
    lightTab1.classList.remove('light-tab-outline')
}
const makeLightTab2Outline = () => {
    lightTab2.src = '../assets/light-tabs/Tab2-outline.svg'
    lightTab2.classList.add('light-tab-outline')
}
const makeLightTab2Solid = () => {
    lightTab2.src = '../assets/light-tabs/Tab2.svg'
    lightTab2.classList.remove('light-tab-outline')
}
const makeLightTab3Outline = () => {
    lightTab3.src = '../assets/light-tabs/Tab3-outline.svg'
    lightTab3.classList.add('light-tab-outline')
}
const makeLightTab3Solid = () => {
    lightTab3.src = '../assets/light-tabs/Tab3.svg'
    lightTab3.classList.remove('light-tab-outline')
}
const makeLightTab4Outline = () => {
    lightTab4.src = '../assets/light-tabs/Tab4-outline.svg'
    lightTab4.classList.add('light-tab-outline')
}
const makeLightTab4Solid = () => {
    lightTab4.src = '../assets/light-tabs/Tab4.svg'
    lightTab4.classList.remove('light-tab-outline')
}

// functions that change info text
const changeInfoText1 = () => {
    // changes info text to night sky 1 text
    infoText1.textContent = "INNER-CITY SKY"
    infoText2.textContent = "The Bortle scale measures the night sky's brightness using a nine-level numeric scale. This night sky represents what you would find in Inner Cities at a 9."
}
const changeInfoText2 = () => {
    // changes info text to night sky 2 text
    infoText1.textContent = "CITY SKY"
    infoText2.textContent = "This sky represents a City Suburban Sky at a number 7."
}
const changeInfoText3 = () => {
    // changes info text to night sky 3 text
    infoText1.textContent = "SUBURBAN SKY"
    infoText2.textContent = "This would be a 6 for a Bright Suburban Sky."
}
const changeInfoText4 = () => {
    // changes info text to night sky 4 text
    infoText1.textContent = "RURAL SKY"
    infoText2.textContent = "Timpanogos Cave National Monument would fall 5-4 which would be very similar to a Suburban Sky. This won the recognition of Urban Night Sky Place from the IDA."
}
const changeInfoText5 = () => {
    // changes info text to night sky 5 text
    infoText1.textContent = "DARK SKY SITES"
    infoText2.textContent = "This represents an excellent dark-sky where many constellations, particularly fainter ones, are barely recognizable amid the large number of stars."
}


///////////////////////// event listeners

lightTab1.addEventListener('click', () => {
    // if light tab 1 = solid then make tab 1 = outline and add night-sky2 class to body background
    if (lightTab1.src.match('../assets/light-tabs/Tab1.svg')) {
        makeLightTab1Outline()
        changeInfoText2()
        removeAllNightSkyClasses()
        body.classList.add('night-sky2')
    // else light tab 1 = outline then make light tab 1 = solid and change body background class to night-sky1
    } else {
        makeLightTab1Solid()
        makeLightTab2Solid()
        makeLightTab3Solid()
        makeLightTab4Solid()
        changeInfoText1()
        removeAllNightSkyClasses()
    }
})

lightTab2.addEventListener('click', () => {
    // if light tab 2 = solid then make tabs 1 and 2 = outline and add night-sky3 class to body background
    if (lightTab2.src.match('../assets/light-tabs/Tab2.svg')) {
        makeLightTab1Outline()
        makeLightTab2Outline()
        changeInfoText3()
        removeAllNightSkyClasses()
        body.classList.add('night-sky3')
    // else light tab 2 = outline then make light tab 2 = solid and change body background class to night-sky2
    } else {
        makeLightTab2Solid()
        makeLightTab3Solid()
        makeLightTab4Solid()
        changeInfoText2()
        removeAllNightSkyClasses()
        body.classList.add('night-sky2')
    }
})

lightTab3.addEventListener('click', () => {
    // if light tab 3 = solid then make tabs 1, 2, and 3 = outline and add night-sky4 class to body background
    if (lightTab3.src.match('../assets/light-tabs/Tab3.svg')) {
        makeLightTab1Outline()
        makeLightTab2Outline()
        makeLightTab3Outline()
        changeInfoText4()
        removeAllNightSkyClasses()
        body.classList.add('night-sky4')
    // else light tab 3 = outline then make light tab 3 = solid and change body background class to night-sky3
    } else {
        makeLightTab3Solid()
        makeLightTab4Solid()
        changeInfoText3()
        removeAllNightSkyClasses()
        body.classList.add('night-sky3')
    }
})

lightTab4.addEventListener('click', () => {
    // if light tab 4 = solid then make all tabs = outline and add night-sky5 class to body background
    if (lightTab4.src.match('../assets/light-tabs/Tab4.svg')) {
        makeLightTab1Outline()
        makeLightTab2Outline()
        makeLightTab3Outline()
        makeLightTab4Outline()
        changeInfoText5()
        removeAllNightSkyClasses()
        body.classList.add('night-sky5')
    // else light tab 4 = outline then make light tab 4 = solid and change body background class to night-sky4
    } else {
        makeLightTab4Solid()
        changeInfoText4()
        removeAllNightSkyClasses()
        body.classList.add('night-sky4')
    }
})

// click event listener that closes welcome modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('fade-out')
    
    setTimeout(function() {
        modal.style.display = 'none'
        modal.classList.remove('fade-out')
    }, 300)
})