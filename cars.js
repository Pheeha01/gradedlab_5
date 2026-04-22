const cars= [
    {name:"8R", type:"hatchback", image:"VW.png", make:"VW"},
    {name:"320i", type:"sedan", image:"BMW.png", make:"BMW" },
    {name:"A45S", type:"sports", image:"BENZ.png", make:"Benz" },
    {name:"RS6", type:"hatchback", image:"AUDI.png", make:"Audi" },
    {name:"SHELBY", type:"sportsback", image:"FORD.png", make:"Ford" },
    {name:"SUPRA", type:"sportsback", image:"TOYOTA.png", make:"Toyota" },
];
let carName = document.getElementById("car-name");
let carType = document.getElementById("car-type")
let carImage= document.getElementById("car-img");
let guessBtn = document.querySelector("#guess-btn");
let options = document.getElementById("make-list")
let correct = document.getElementById("correct")
let total= document.getElementById("total")

let carIndexImg= Math.floor(Math.random()*6)
let carIndexText= Math.floor(Math.random()*6)
console.log(cars[carIndexImg].make)
console.log(cars[carIndexText].make)
carName.textContent = cars[carIndexText].make;
carType.textContent = cars[carIndexText].type;
carImage.src = cars[carIndexImg].image;
guessBtn.disabled = true;

options.addEventListener('change', (event) => {
    console.log("Selected value:", event.target.value);
    guessBtn.disabled = false;

    guessBtn.addEventListener('click',()=>{
        let answer= event.target.value;
        if(cars[carIndexImg].make===answer){
            carName.textContent = cars[carIndexImg].make;
            carType.textContent = cars[carIndexImg].type;
            correct.textContent++
            total.textContent++
            guessBtn.disabled = true;
            setTimeout(()=>{
                carIndexImg= Math.floor(Math.random()*6)
                carIndexText= Math.floor(Math.random()*6)
                carName.textContent = cars[carIndexText].make;
                carType.textContent = cars[carIndexText].type;
                carImage.src = cars[carIndexImg].image;
                options.selectedIndex= 0
            }, 4000)
            
        } 
        else{
            total.textContent++
            guessBtn.disabled = true;
            alert(`Incorrect: The correct answer for this is ${cars[carIndexImg].make}`)
            carName.textContent = cars[carIndexImg].make;
            carType.textContent = cars[carIndexImg].type;
            
            setTimeout(()=>{
                carIndexImg= Math.floor(Math.random()*6)
                carIndexText= Math.floor(Math.random()*6)
                carName.textContent = cars[carIndexText].make;
                carType.textContent = cars[carIndexText].type;
                carImage.src = cars[carIndexImg].image;
                options.selectedIndex= 0
            }, 2000)
        }
    })
});