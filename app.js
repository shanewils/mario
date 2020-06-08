let character = document.getElementById("character");
let block = document.getElementById("block");

function jump(){
    character.classList.add("animate");
    document.getElementById("jump").play();
    setTimeout(function(){
            character.classList.remove("animate");
            
            
    },500);
}

const checkDead = setInterval(function(){
    let characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>240){
        document.getElementById("dead").play();
        block.style.animation = "none";
        block.style.display = "none";
        alert("Mama Mia!.");
    }
},5);



