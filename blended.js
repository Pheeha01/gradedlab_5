//Load the html elements
let surname = document.getElementById("surname")
let fontFam= document.getElementById("font")
let surOut= document.querySelectorAll("input[type='radio']")

//create a button to blend, style and add to the dom
let blendBtn = document.createElement("button")
blendBtn.textContent= "Blend Now"
blendBtn.style.backgroundColor= "Green"

//create a elements
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

//the slider
let adjuster= document.createElement("input")
adjuster.setAttribute("type", "range")
adjuster.setAttribute("min", "15")
adjuster.setAttribute("max", "100")
adjuster.setAttribute("value", "15")
document.body.append(adjuster)

let fontS= document.createElement("label")
fontS.textContent= "    Font Size: "
colour.after(fontS)
let fontSize = document.createElement("input");
fontSize.setAttribute("type","number")
fontSize.setAttribute("placeholder","font size")
fontSize.setAttribute("value", "16"); 
fontS.after(fontSize)

//to store the surname before its vallue is cleared when user clicks button
let currentSurN="";
//what to do when a blend button is clicked
blendBtn.addEventListener('click', ()=>{
    outputSec.innerHTML=""
    outputSec.style.fontFamily=`${fontFam.value}`
    outputSec.style.color=`${colour.value}`
    outputSec.style.fontSize=`${fontSize.value}`
    currentSurN= surname.value;
    radioButton(currentSurN, outputSec)
    surname.value=""
})

//for the adjuster
adjuster.addEventListener("input", () => {
    // only update if there is content
    if (outputSec.innerHTML !== "") {
        outputSec.innerHTML = "";
        outputSec.style.fontFamily = fontFam.value;
        outputSec.style.color = colour.value;
        console.log(currentSurN)
        radioButton(currentSurN, outputSec);
    }
});

//a function that takes the surname and the div to display the blend depending on the type of the blend the user wants
function radioButton(name, div){
    //split by each character
    let letters = name.split("")
    //display diagonally sequential
    if(surOut[0].checked){

        for (let i = 0; i < letters.length; i++) {
           let spanCont= document.createElement("span")
            let pixels=adjuster.value*(i+1)
            spanCont.textContent= letters[i]
            spanCont.style.left= `${pixels}px`
            spanCont.style.top= `${pixels}px`
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)  
        }
        return
    }
    //display randomly
    if(surOut[1].checked){

        for (let i = 0; i < letters.length; i++) {
            let spanCont= document.createElement("span")
            spanCont.textContent= letters[i]
            //15*20=300
            spanCont.style.left = `${Math.floor(Math.random() * adjuster.value * 20)}px`;
            //15*6.667=100
            spanCont.style.top = `${Math.floor(Math.random() * adjuster.value * 6.667)}px`;
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)      
        } 
        return;
    }
    //display diagonally in reverse
    if(surOut[2].checked){
        letters.reverse()
        for (let i = 0; i < letters.length; i++) {
            let spanCont= document.createElement("span")
            let pixels=adjuster.value*(i+1)
            spanCont.textContent= letters[i]
            spanCont.style.left= `${pixels}px`
            spanCont.style.top= `${pixels}px`
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)      
        }
        return
    }   
}