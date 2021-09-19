const divs = [...document.querySelectorAll('.grid-item')];
const spn = document.querySelector('span');
const btn = document.querySelector('button');
let field; 
let currentPlayer; 
let gameActive; 
const winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const deafultState = () => {
    field = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    divs.forEach(div => div.innerHTML = '');
}

deafultState();

const validateGame = () => {
    let gameWon = false;
    for(let i = 0; i <= 7; i++ )
    {
        
        const [positionA, positionB, positionC] = winningCondition[i];
        const value1 = field[positionA];
        const value2 = field[positionB];
        const value3 = field[positionC];
        
        if (value1 !== '' && value1 === value2 && value1 === value3)
        {
            gameWon = true;
            break;
        }
    }
    if(gameWon){
            gameActive = false;
            spn.innerHTML = `Congratulations player ${currentPlayer}, You WIN!`;
            deafultState();
    }
    else if (field.every((emptyField) => emptyField !== "")){
        gameActive = false;
        spn.innerHTML = `REMIS`;
        deafultState();
    }
};

const pick = (e) =>{    
    const { index } = e.target.dataset;
    
    if (gameActive && field[index] === '')
    {
        field[index] = currentPlayer;
        e.target.innerHTML = currentPlayer;
        validateGame();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';   
    }
};

divs.forEach(div => div.addEventListener('click', pick));

btn.addEventListener('click', deafultState)