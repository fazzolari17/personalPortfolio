const colorDisplay = document.getElementById("color-display")
const button = document.getElementById("btn")
const rgbButton = document.getElementById("rgb-btn")
const hexButton = document.getElementById("hex-btn")
const icon = document.getElementById("footer-icon")
let randomColor = ``
isRgb = true

// =====================================
// ========== Event Listeners ==========
// =====================================
hexButton.addEventListener("click", ()=>{
  if(isRgb) {
    isRgb = false
    let regex = /\d{1,3}/g
    let newreg = colorDisplay.textContent.match(regex)
    let r = newreg[0]
    let g = newreg[1]
    let b = newreg[2]
    r = parseInt(r)
    g = parseInt(g)
    b = parseInt(b)
    colorDisplay.textContent = rgbToHex(r, g, b)
  }
})

rgbButton.addEventListener("click", () => {
  if(!isRgb) {
  isRgb = true
  let converted = hexToRgb(colorDisplay.textContent)
  colorDisplay.textContent = `RGB(${converted.r}, ${converted.g}, ${converted.b})`
  }
})

button.addEventListener("click",() => {
  if(!isRgb) {
    generateRandomRGBColor()
    renderColor()
  } else if (isRgb) {
    generateRandomHexColor()
    renderColor()
  }
})

// ===============================
// ========== Functions ==========
// ===============================
const generateRandomHexColor = () => {
  const digits = "0123456789abcdef"
  let newColor = ''
  for( let i = 0; i < 6; i++ ) {
      newColor += digits[Math.floor(Math.random() * 16)]
  }
  return `#${newColor}`
}

const generateRandomRGBColor = () => {
  let rgb = ''
  return `RGB(${rgb =  Math.floor(Math.random() * 256)}, ${rgb = Math.floor(Math.random() * 256)}, ${rgb = Math.floor(Math.random() * 256)})`
}


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
  

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const renderColor = () => {
  let newColor = ''
  if(isRgb) {
    newColor = generateRandomRGBColor()
    colorDisplay.textContent = newColor
    document.body.style.background = newColor
    button.style.color = newColor  
    icon.style.color = newColor  
    document.body.style.transition = "background 2s" 
    button.style.transition = "color 2s"
    icon.style.transition = "color 2s"                  
    // button.style.backgroundColor = newColor        // Uncomment to change the color of the button also 
  } else {
    newColor = generateRandomHexColor()
    colorDisplay.textContent = newColor
    document.body.style.background = newColor
    button.style.color = newColor   
    icon.style.color = newColor  
    document.body.style.transition = "background 2s"
    button.style.transition = "color 2s"
    icon.style.transition = "color 2s"                 
    // button.style.backgroundColor = newColor        // Uncomment to change the color of the button also 

  }
}