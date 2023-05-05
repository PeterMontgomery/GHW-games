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

//trick to sort array randomly!
garmentArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')

// function createWardrobe(){
//     for (let i = 0; i < garmentArray.length; i++){
//         const garm = document.createElement('img')
//         garm.setAttribute('src', garmentArray[i].img)
//         garm.setAttribute('data-id', i)
//         //garm.addEventListener('click', selectGarm)
//         gridDisplay.append(garm)
//     }
// }
// createWardrobe()


const garmDisplay = document.querySelector('#garment')
const g = document.createElement('img')
g.setAttribute('src', garmentArray[Math.floor(Math.random() * garmentArray.length)].img)
garmDisplay.append(g)

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
animateGarment()


  
