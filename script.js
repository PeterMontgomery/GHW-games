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
function createWardrobe(){
    for (let i = 0; i < garmentArray.length; i++){
        const garm = document.createElement('img')
        garm.setAttribute('src', garmentArray[i].img)
        garm.setAttribute('data-id', i)
        //garm.addEventListener('click', selectGarm)
        gridDisplay.append(garm)
    }
}
createWardrobe()


var character = document.getElementById("scene");
var garment = document.getElementById("garment");
var counter=0;
function puton(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
// var checkDead = setInterval(function() {
//     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     let blockLeft = parseInt(window.getComputedStyle(garment).getPropertyValue("left"));
//     if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
//         block.style.animation = "none";
//         alert("Game Over. score: "+Math.floor(counter/100));
//         counter=0;
//         block.style.animation = "block 3s infinite linear";
//     }else{
//         counter++;
//         document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
//     }
// }, 10);