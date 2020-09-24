const dino = document.querySelector('.dino');
let background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let pontos = 0;
let score = 0;
let finalScore = 0;



function handleKeyUp(event) {
    if(event.keyCode === 32){
        if (!isJumping){
        jump();   
        } 
    }
}

function jump() {
    
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            }, 20);
        }else {
        //Subindo
        position += 20;

        dino.style.bottom = position + 'px';
            }
    }, 20);
}



function creatCactus() {
    meuScore.textContent = 'Score = ' + score;    
    
    const cactus = document.createElement('div');
    let cactusPosition = 1100;
    let randomTime = Math.random() * 6000;     
    console.log(randomTime);   
      

    cactus.classList.add('cactus');
    cactus.style.left = 1100 + 'px';
    background.appendChild(cactus);    
    
    
    let leftInterval = setInterval(() => {   
             
        if (cactusPosition < -60) {            
            clearInterval(leftInterval);            
            background.removeChild(cactus);             
            score++;
            meuScore.textContent = 'Score = ' + score;         
            console.log(score);
            
            
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {   
             
            //GameOver
            clearInterval(leftInterval);
            document.body.innerHTML = "<h1 class='game-over'>Fim de jogo</h1>";
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(creatCactus, randomTime);    
    
}
//placar
let meuScore = document.createElement('h1');

background.appendChild(meuScore);

    
creatCactus();
document.addEventListener('keyup', handleKeyUp);