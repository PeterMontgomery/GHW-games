const garmentArray = [
    {
        name: 'ramones',
        img: 'assets/rick/ramones.png',
    },
    {
        name: 'shorts',
        img: 'assets/rick/shorts.png',
    }
]

//to hold score
let result = 0
let gameOver = 0

//trick to sort array randomly!
garmentArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')

function animateGarment(){
    
    const garmentTranslate = [
        { transform: "translate(-880px)" }
    ]
    const garmentTiming = {
        duration: 3000,
        iterations: Infinity,
    }
    const garment = document.getElementById("garment");
    garment.animate(garmentTranslate, garmentTiming);
}

function createGarment() {
    const garmDisplay = document.querySelector('#garment')
    const g = document.createElement('img')
    g.setAttribute('id', "rick")
    g.setAttribute('src', garmentArray[Math.floor(Math.random() * garmentArray.length)].img)
    g.addEventListener('click', () => {
        if (g.id == "rick"){
            result++;
            scoreSpan.textContent = result
        }
    })
    garmDisplay.append(g)
    animateGarment()
    setTimeout(function(){garmDisplay.remove(g)},3000)
}
createGarment()

// for(let i = 0; i<3; i++){
//     setTimeout(function(){createGarment()},3000)
// }


  
