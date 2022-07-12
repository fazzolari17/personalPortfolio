
// HTML ELEMENTS 
const themeContainerHeader = document.getElementById("theme-container")
const themeContainerBody = document.getElementById("theme-container2")
const themeIcon = document.getElementById("theme-icon")
const themeIcon2 = document.getElementById("theme-icon2")

const setTheme = theme => document.documentElement.className = theme

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

// Moves the color icon depending on size 
window.addEventListener('resize', ()=> {
    if (window.innerWidth > 850) {
        themeContainerBody.classList.remove("hidden")
        themeContainerBody.classList.add("show")
        themeContainerHeader.classList.remove("show")
        themeContainerHeader.classList.add("hidden")
    } else if (window.innerWidth < 850){
        themeContainerBody.classList.remove("show")
        themeContainerBody.classList.add("hidden")
        themeContainerHeader.classList.remove("hidden")
        themeContainerHeader.classList.add("show")
    }
})

window.addEventListener('load', ()=> {
    prefersDarkScheme.matches ? setTheme('dark') : setTheme('light') 
    if (window.innerWidth > 850) {
        themeContainerBody.classList.remove("hidden")
        themeContainerBody.classList.add("show")
        themeContainerHeader.classList.remove("show")
        themeContainerHeader.classList.add("hidden")
    } else if (window.innerWidth < 850){
        themeContainerBody.classList.remove("show")
        themeContainerBody.classList.add("hidden")
        themeContainerHeader.classList.remove("hidden")
        themeContainerHeader.classList.add("show")
    }
})


document.getElementById("theme-icon").addEventListener("click", ()=>{
    if (document.documentElement.className != "light") {
        themeIcon.textContent = "dark_mode"
        themeIcon2.textContent = "dark_mode" 
        setTheme('light')    
    } else {
        themeIcon.textContent = "light_mode"
        themeIcon2.textContent = "light_mode" 
        setTheme('dark')    
    }
})

themeContainerBody.addEventListener("click", () => {
    if (document.documentElement.className != "light") {
            themeIcon.textContent = "dark_mode"
            themeIcon2.textContent = "dark_mode" 
            setTheme('light')
    } else {
            themeIcon.textContent = "light_mode"
            themeIcon2.textContent = "light_mode"     
            setTheme('dark')
    }
})



	




