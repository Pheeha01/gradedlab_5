const cars= [
    {name:"8R", type:"hatchback", image:"VW.jpg", make:"VW"},
    {name:"320i", type:"sedan", image:"BMW.jpg", make:"BMW" },
    {name:"A45S", type:"sports", image:"BENZ.png", make:"Benz" },
    {name:"RS6", type:"hatchback", image:"AUDI.jpg", make:"Audi" },
    {name:"SHELBY", type:"sportsback", image:"FORD.jpg", make:"Ford" },
    {name:"SUPRA", type:"sportsback", image:"TOYOTA.jpg", make:"Toyota" },
];
//loading the elements
let carName = document.getElementById("car-name");
let carType = document.getElementById("car-type")
let carImage= document.getElementById("car-img");
let guessBtn = document.querySelector("#guess-btn");
let select = document.getElementById("make-list")
let correct = document.getElementById("correct")
let total= document.getElementById("total")

//Generating a random picture and the text on the Onload
let carIndexImg= Math.floor(Math.random()*6)
let carIndexText= Math.floor(Math.random()*6)
console.log(cars[carIndexImg].make)
console.log(cars[carIndexText].make)
carName.textContent = cars[carIndexText].make;
carType.textContent = cars[carIndexText].type;
carImage.src = cars[carIndexImg].image;

//disabling the button
guessBtn.disabled = true;

//poluting my select element
select.innerHTML= `
            <option>Select Car</option>
            <option value="VW">VW</option>
            <option value="BMW">BMW</option>
            <option value="Benz">Benz</option>
            <option value="Audi">Audi</option>
            <option value="Ford">Ford</option>
            <option value="Toyota">Toyota</option>
`
//enabling the guess button if there a change in the selection
select.addEventListener('change', (event) => {
    console.log("Selected value:", event.target.value);
    guessBtn.disabled = false; 
});

//process of the game behind the click
guessBtn.addEventListener('click',()=>{
    let answer= select.value;
    //check if user option is correct
    if(cars[carIndexImg].make===answer){
        //change the text to align with the image to show that it is correct, give score and increase guess count
        carName.textContent = cars[carIndexImg].make;
        carType.textContent = cars[carIndexImg].type;
        correct.textContent = parseInt(correct.textContent)+1;
        total.textContent = parseInt(total.textContent) + 1;           
        setTimeout(()=>{
            loadImage();
        }, 3000)
    }
    else{
        //change the text to align with the image to show that it is correct and increase number of guesses
        total.textContent = parseInt(total.textContent) + 1;
        alert(`Incorrect: ${cars[carIndexImg].make}`)
        carName.textContent = cars[carIndexImg].make;
        carType.textContent = cars[carIndexImg].type;
        setTimeout(()=>{
            loadImage();
        }, 3000)
    }
})
//reloading another image for another round
function loadImage() {
    carIndexImg = Math.floor(Math.random() * 6);
    carIndexText = Math.floor(Math.random() * 6);
    carName.textContent = cars[carIndexText].make;
    carType.textContent = cars[carIndexText].type;
    carImage.src = cars[carIndexImg].image;
    select.selectedIndex = 0;
    guessBtn.disabled = true;
}