let character = document.getElementById("character");
let block = document.getElementById("block");
let coin = document.getElementById("coin");
let score = 0;

function refreshData(){
    x = 2;  
    document.getElementById("shoot").play(); 
    setTimeout(refreshData, x*1000);    
}
refreshData();

//do {refreshData()
//}
//while (coffin.style.display="block");
   
//document.addEventListener("keypress", jump);

const jump = () =>{
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
    if(blockLeft<40 && blockLeft>0 && characterTop>170){
        document.getElementById("theme").pause();
        document.getElementById("dead").play();
        block.style.animation = "none";
        block.style.visibility = "hidden";
        coin.style.animation = "none";
        coin.style.display = "none";
        pipe.style.animation = "none";
        pipe.style.visibility = "hidden";
        character.style.visibility = "hidden";
        const gameOverMsg = "Mama Mia! You scored " + score + " Would you like to try again?";

        if (confirm(gameOverMsg) == true) {
            init();
        }
        if (confirm(gameOverMsg) == false) {
            document.getElementById("coffind").play();
            coffin.style.display = "block";
            bg.style.display = "none";
            coin.style.visibility = "hidden"; 
        }
    }
},5);

const checkPipe = setInterval(function(){
    let characterTopPipe = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let pipeLeft = 
    parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    if(pipeLeft<40 && pipeLeft>0 && characterTopPipe>170){
        document.getElementById("theme").pause();
        document.getElementById("dead").play();
       block.style.animation = "none";
        block.style.visibility = "hidden";
        coin.style.animation = "none";
        coin.style.display = "none";
        pipe.style.animation = "none";
        pipe.style.visibility = "hidden";
        character.style.visibility = "hidden";
        const gameOverMsg = "Mama Mia! You scored " + score + " Would you like to try again?";

        if (confirm(gameOverMsg) == true) {
            init();
        }
        if (confirm(gameOverMsg) == false) {
            document.getElementById("coffind").play();
            coffin.style.display = "block";
            bg.style.display = "none";
            coin.style.visibility = "hidden";
            
            
        }
    }
},5);

let coinGrabbed = false;

const checkCoin = setInterval(function(){
    let characterTopCoin = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let coinLeft = 
    parseInt(window.getComputedStyle(coin).getPropertyValue("left"));
    if(coinLeft<40 && coinLeft>=0 && characterTopCoin<170 && !coinGrabbed){
        // console.log('triggered')
        document.getElementById("point").play();
        coin.style.visibility = "hidden";
        isCoin = false;
        score++;
        updateHtmlScore();
        coinGrabbed =true; 
        console.log(coinGrabbed);
    }
    if (coinLeft > 620) {
        coinGrabbed = false;
        coin.style.visibility = "visible";
    }
},5);

const updateHtmlScore = () => {
    document.getElementById("scoreVal").innerHTML = score;
  };

  function init(){
    location.reload();
  }