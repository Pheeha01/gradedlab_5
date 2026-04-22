//Load the html elements
let surname = document.getElementById("surname")
let fontFam= document.getElementById("font")
let surOut= document.querySelectorAll("input[type='radio']")

//create a button to blend, style and add to the dom
let blendBtn = document.createElement("button")
blendBtn.textContent= "Blend Now"
blendBtn.style.backgroundColor= "Green"
//create a go label
let go= document.createElement("label")
go.textContent="Go: "
document.body.append(go)
go.after(blendBtn)
//create a font colour label
let fontColour= document.createElement("label")
fontColour.textContent="   Font Colour: "
fontFam.after(fontColour)
//create a select element and populate the option
let colour= document.createElement("select")
colour.innerHTML=`
    <option>select colour</option>
    <option value= "Black">Black</option>
    <option value="Blue">Blue</option>
    <option value="Red">Red</option>
    <option value="Green">Green</option>`
fontColour.after(colour)

//create a div where we are going to display the output of the blend
let outputSec = document.createElement("div")
document.body.append(outputSec)
outputSec.style.border= "solid 2px orange"
outputSec.style.width="400px"
outputSec.style.position = "relative" 
outputSec.style.height= "400px"
surOut[0].checked = false
surOut[1].checked= false
surOut[2].checked= false

//what to do when a blend button is clicked
blendBtn.addEventListener('click', ()=>{
    outputSec.innerHTML=""
    outputSec.style.fontFamily=`${fontFam.value}`
    outputSec.style.color=`${colour.value}`
    radioButton(surname.value, outputSec)
    surname.value=""
})

//a function that takes the surname and the div to display the blend depending on the type of the blend the user wants
function radioButton(name, div){
    //split by each character
    name = surname.value.split("")
    //display diagonally sequential
    if(surOut[0].checked){
        surOut[1].checked= false
        surOut[2].checked= false
        
        for (let i = 0; i < name.length; i++) {
           let spanCont= document.createElement("span")
            let pixels= 15
            pixels *=(i+1)
            spanCont.textContent= name[i]
            spanCont.style.left= `${pixels}px`
            spanCont.style.top= `${pixels}px`
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)  
        }
        return
    }
    //display randomly
    if(surOut[1].checked){
        surOut[2].checked= false
        surOut[0].checked= false
        for (let i = 0; i < name.length; i++) {
            let spanCont= document.createElement("span")
            spanCont.textContent= name[i]
            spanCont.style.left= `${Math.floor(Math.random()*300)}px`
            spanCont.style.top= `${Math.floor(Math.random()*100)}px`
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)      
        } 
        return;
    }
    //display diagonally in reverse
    if(surOut[2].checked){
        surOut[1].checked = false
        surOut[0].checked= false
        name.reverse()
        for (let i = 0; i < name.length; i++) {
            let spanCont= document.createElement("span")
            let pixels= 15
            pixels *=(i+1)
            spanCont.textContent= name[i]
            spanCont.style.left= `${pixels}px`
            spanCont.style.top= `${pixels}px`
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)      
        }
        return
    }   
}