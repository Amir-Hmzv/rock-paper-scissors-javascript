function game(){
    let pScore = 0
    let cScore = 0

    function startGame() {
        const playBtn = document.getElementById('play-btn')
        const gameTitle = document.querySelector('.game-title')
        const gameSection = document.querySelector('.game-section')
        playBtn.addEventListener('click', () => {
            gameTitle.classList.add('fadeOut');
            gameSection.classList.add('fadeIn')
           
        })
    }
    function playMatch() {
      
        const optionBtn = document.querySelectorAll('.option button')
        optionBtn.forEach(btn => {
            btn.addEventListener('click' , (e) => {
                const playerImg = document.querySelector('.player-img')
                const computerImg = document.querySelector('.computer-img')
                
                const allOption  = ['rock','paper','scissors']
                const chance =  Math.floor(Math.random() * 3)
                const chanceOption = allOption[chance]
                const event = e.target.innerText
                checkWinner(event,chanceOption)


                playerImg.src = `img/${event}.png`
                computerImg.src = `img/${chanceOption}.png`
               
            
              
            
                
                
                
            })
        })
   
    }

    function UpdateScore() {
        const computerSection = document.querySelector('.computer-section p')
        const playerSection = document.querySelector('.player-section p')
        computerSection.textContent = cScore
        playerSection.textContent = pScore
    }
    
    const checkWinner = (player,computer) => {
        const chooseText = document.querySelector('.choose-text') 
        if (player === computer) {
            chooseText.textContent = `game is draw`
           
            return;

        }

            if (player === 'rock') {
                if (computer === 'scissors') {
                    chooseText.textContent = `palayer is win`
                    pScore++
                    UpdateScore()
                    return;
                    
                }else{
                    chooseText.textContent = `computer is win`
                    cScore++
                    UpdateScore()
                    return;
                }
            }

            if (player === 'scissors') {
                if (computer === 'paper') {
                    chooseText.textContent = `palayer is win`
                    pScore++
                    UpdateScore()
                    return;
                }else{
                    chooseText.textContent = `computer is win`
                    cScore++
                    UpdateScore()
                    return;
                }
            }

            if (player === 'paper') {
                if (computer === 'rock') {
                    chooseText.textContent = `palayer is win`
                    pScore++
                    UpdateScore()
                    return;
                }else{
                    chooseText.textContent = `computer is win`
                    cScore++
                    UpdateScore()
                    return;
                }
            }
    }


    startGame()
    playMatch()
}


game()