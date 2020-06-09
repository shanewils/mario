let character = document.getElementById("character");
let block = document.getElementById("block");
let coin = document.getElementById("coin");
let score = 0;

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
    if(blockLeft<40 && blockLeft>0 && characterTop>225){
        document.getElementById("theme").pause();
        document.getElementById("dead").play();
        block.style.animation = "none";
        block.style.display = "none";
        alert("Mama Mia!.");
    }
},5);

const checkCoin = setInterval(function(){
    let characterTopCoin = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let coinLeft = 
    parseInt(window.getComputedStyle(coin).getPropertyValue("left"));
    if(coinLeft<40 && coinLeft>=0 && characterTopCoin<225){
        document.getElementById("point").play();
        coin.style.animation = "none";
        coin.style.display = "none";
        score += 1;
        updateHtmlScore
        console.log(score)
    }
    

},5);

const updateHtmlScore = () => {
    document.getElementById("score").innerHTML =
      "<p>SCORE " + "<span>" + score + "</span>" + "</p>";
  };