const GRID_SIZE = 3;
const grid = document.getElementById('grid');
const playerConfig = {
    p1 : {
        key:'p1',symbol:'X',
    },
    p2 : {
        key: 'p2',symbol:'O'
    }
}
let gameCompleted = false
let currentPlayer = playerConfig.p1;
let playerMovesMap = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
let movesDone = 0;
function addGrid() {
    let fragment = document.createDocumentFragment();
    for(let i=0;i<GRID_SIZE;i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<GRID_SIZE;j++) {
            let button = document.createElement('button')
            button.id=`${i}${j}`
            button.classList.add('cell')
            row.appendChild(button)
        }
        fragment.appendChild(row);
    }
    grid.appendChild(fragment);
}

function updateWinner() {
    let winnerEle = document.getElementsByClassName('winner')[0];
    winnerEle.textContent = currentPlayer.key === 'p1' ? 'Player 1 Wins' : 'Player 2 Wins'
    gameCompleted=true;
}

function checkRows () {
    let isWin = false;
    for(let i=0;i<GRID_SIZE;i++) {
        if(playerMovesMap[i].every(move => move==='X') || playerMovesMap[i].every(move=> move === 'O')) 
        {
           isWin = true;
           break;
        
       } 
   }
   return isWin;
}

function checkCols () {
    let isWin = false;
    for(let j=0;j<GRID_SIZE;j++) {
        if(playerMovesMap.map((row) => row[j]).every(move => move==='X') || playerMovesMap.map(row => row[j]).every(move=> move === 'O')) 
         {
            isWin = true
            break;
         
        } 
    }
    return isWin;
}

function checkDiagonal() {
    let isWin = false;
    if(playerMovesMap.map((row,index) => row[index]).every(move => move==='X') || playerMovesMap.map((row,index) => row[index]).every(move=> move === 'O')) 
         {
            isWin=true;
        } 
        return isWin
}

function checkWinner() {
    return (
        checkRows() ||
        checkCols() ||
        checkDiagonal()
    )
}

function handlePlayerChance (cell) {
    let clickedCell = document.getElementById(cell)
    let [i,j] = cell.split('')
    movesDone+=1;
    if(clickedCell.textContent==='' && !gameCompleted)
    {
    clickedCell.textContent = currentPlayer.symbol;
    playerMovesMap[i][j] = currentPlayer.symbol;
    if(checkWinner()) {
        updateWinner();
    }
    else if(movesDone === GRID_SIZE*GRID_SIZE) {
        let winnerEle = document.getElementsByClassName('winner')[0];
        winnerEle.textContent = 'Match Draw'
    };
    currentPlayer = currentPlayer.key === 'p1' ? playerConfig.p2 : playerConfig.p1;
}
}



function handleCellClicks() {
    grid.addEventListener('click',function(event) {
        let element = event.target;
        if(element.classList.contains('cell')) {
            let cell = element.id
            handlePlayerChance(cell);
        }
    })
}

function handleReset() {
    document.getElementById('reset').addEventListener('click',function() {
        let cells = document.getElementsByClassName('cell')
        
        for(let i=0;i<cells.length;i++){
            cells[i].textContent=''
        }
        playerMovesMap = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(''));
        gameCompleted=false;
        movesDone=0;
        document.getElementsByClassName('winner')[0].textContent = ''
    })
}






const main =()=> {
    addGrid();
    handleCellClicks();
    handleReset();
}


main();