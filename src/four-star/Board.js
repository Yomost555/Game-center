import React, {useState, useEffect} from 'react'
import Cell from './Cell.js'

//1 = green, 2 = red
let turnColor;

let checkStatus;

function Board() {

    const [board,setBoard] = useState();


    useEffect(() => {
        handleRestartButton();
    },[])

    const handleRestartButton = () => {
        setBoard([
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
        ])

        turnColor = 1;
        checkStatus = 0;
    };

    const putToken = (row,col,color) =>{
        let z;
        for(let i=5; i>-1; i--){
            if(board[i][col] === 0){
                board[i][col] = turnColor;
                turnColor = turnColor%2+1;
                z = i;
                break;
            }
        }

        checkStatus = checkWhoWin(z,col,color);
        setBoard([...board]);
    };

    const checkWhoWin = (row,col,color) => {
        console.log('row col color', row, col, color)
        let result = 0;
        
        // horizontal check
        let horizontalCheck = 1;
        for (let j = col+1; j < 7; j++) {
            if (board[row][j] === color) {
                horizontalCheck +=1;
            }
            else {
                break;
            }
        }
        for (let j = col-1; j > -1 ; j--){
            if (board[row][j] === color) {
                horizontalCheck +=1;
            }
            else {
                break;
            }
        }
        console.log('horizontalCheck',horizontalCheck)
        if(horizontalCheck > 3){
            result = color;
        }

        // vertical check
        if (result === 0){
            let verticalCheck = 1;
            for (let i = row+1; i < 6; i++){
                if (board[i][col] === color) {
                    verticalCheck +=1;
                }
                else {
                    break;
                }
            }
            for (let i = row-1; i > -1; i--){
                if (board[i][col] === color) {
                    verticalCheck +=1;
                }
                else {
                    break;
                }
            }
            console.log('verticalCheck',verticalCheck)
            if(verticalCheck > 3){
                result = color;
            }
        }

        // diagonal1 check (top-left to bottom-right)
        if (result === 0){
            let diagonal1Check = 1;
            for(let i = row+1, j = col+1; i < 6 && j < 7; i++, j++){
                if (board[i][j] === color){
                    diagonal1Check += 1;
                }
                else{
                    break;
                }
            }
            for(let i = row-1, j = col-1; i > -1 && j > -1; i--, j--){
                if (board[i][j] === color){
                    diagonal1Check += 1;
                }
                else{
                    break;
                }
            }

            console.log('diagonal1Check',diagonal1Check)
            if(diagonal1Check >3){
                result = color;
            }
        }


        // diagonal2 check (bottom-leftto top-right)
        if (result === 0){
            let diagonal2Check = 1;
            for (let i = row+1, j = col-1; i < 6 && j > -1; i++, j--){
                if (board[i][j] === color){
                    diagonal2Check += 1;
                }
                else{
                    break;
                }
            }

            for (let i = row-1, j = col+1; i > -1 && j < 7; i--, j++){
                if (board[i][j] === color){
                    diagonal2Check += 1;
                }
                else{
                    break;
                }
            }
            console.log('diagonal2Check',diagonal2Check)
            if(diagonal2Check >3){
                result = color;
            }
        }

        console.log('result', result)
        return result;

    };

    return(
        <div className ='board'>
            <div className='active-bar'>
                <div className='turn'>
                    <div className={`${turnColor === 1? 'active-bar-green':'active-bar-red'}`}></div>
                    <div className='turn-text'>TURN</div>
                </div>
            </div>
            <div className = 'rectangle'>
            {
                board && board.map( (row,i) => row.map((element,j) => {
                    return <Cell
                            key = {`cell${i}-${j}`}
                            tokenColor = {board[i][j]}
                            onChange = {() => {
                                if (!checkStatus){
                                    putToken(i,j,turnColor)
                                }
                            }}
                    />
                }) )
            }
            </div>
            <button className='restart-button' onClick={handleRestartButton}>RESTART</button>

            <div className='victory-text'>
                {checkStatus === 1? 'GREEN VICTORY!!!':`${checkStatus === 2? 'RED VICTORY!!!':''}`}
            </div>
        </div>
    )
}

export default Board;