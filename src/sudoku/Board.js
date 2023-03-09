import React, {useState, useEffect} from 'react' 
import Cell from './Cell.js'
import axios from 'axios';


let interval;

function Validation(board) {
    
    let result = 1;
    //horizontal and vertical checking
    for(let i = 0; i < 9; i++){
        let horizontalSet = [0,0,0,0,0,0,0,0,0];
        let verticalSet = [0,0,0,0,0,0,0,0,0];
        let horizontalSum = 0;
        let verticalSum = 0;
        for(let j = 0; j < 9; j++){
            //horizontal
            if(board[i][j] !== 0) {
                horizontalSet[board[i][j]-1] += 1;
                if (horizontalSet[board[i][j]-1] === 1){
                    horizontalSum += 1;
                }
            }
            //vertical
            if(board[j][i] !== 0) {
                verticalSet[board[j][i]-1] += 1;
                if (verticalSet[board[j][i]-1] === 1){
                    verticalSum += 1;
                }
            }
        }
        
        if (verticalSum !== 9 && horizontalSum !== 9){
            result = 0;
            return(result);
        }
    }
    //each square checking
    const a = [0,0,0,1,1,1,2,2,2];
    const b = [0,1,2,0,1,2,0,1,2];
    for (let i = 0 ; i < 9 ; i += 3) {
        for (let j = 0 ; j < 9 ; j += 3) {
            let squareSet = [0,0,0,0,0,0,0,0,0];
            let sqaureSum = 0;
            for (let k = 0 ; k < 9 ; k += 1) {
                if(board[i+a[k]][j+b[k]] !== 0){
                    squareSet[board[i+a[k]][j+b[k]]-1] += 1;
                    if (squareSet[board[i+a[k]][j+b[k]]-1] === 1) {
                        sqaureSum += 1;
                    }
                }
            }

            if (sqaureSum !== 9){
                result = 0;
                return(result);
            }
        }
    }

    return(result);
}

function Board() {

    const [currentBoard, setCurrentBoard] = useState();
    const [currentInitial, setCurrentInitial] = useState();
    const [statusSubmit, setStatusSubmit] = useState();
    const [Rboard, setRboard] = useState([]);
    const [Iboard, setIboard] = useState([]);
    const [timer, setTimer] = useState();
    const [checkActive, setCheckActive] = useState();
    const [checkBoard, setCheckBoard] = useState();
    const [boardID, setBoardID] = useState();

    useEffect(() => {
        
        handleResetButton();
        interval = setInterval(() => {
            setTimer(timer => timer+1);
        }, 1000);
    
    },[])

    useEffect(() => {
        handleRestartButton();

    }, [Rboard, Iboard]);

    useEffect(() => {
        handleCheckButton();

    }, [checkActive]);

    const handleSubmitButton = () => {
        const result = Validation(currentBoard);
        if (result === 0){
            setStatusSubmit('Invalid');
        }
        else if (result === 1){
            setStatusSubmit('Valid');
            clearInterval(interval);
        }   
    }

    const handleRestartButton = () => {
        let newIboard1 = Iboard.map((row) => row.map(element => element));
        let newIboard2 = Iboard.map((row) => row.map(element => element));
        let newCheckBoard = Iboard.map((row) => row.map(() => 0));
        setCurrentInitial(newIboard1);
        setCurrentBoard(newIboard2);
        setStatusSubmit('');
        setCheckActive(false);
        setCheckBoard(newCheckBoard);
        setTimer(0);
    }

    const handleHintButton = () => {
        
        const newCurrentInitial = currentInitial;

        let countZero = 0;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (newCurrentInitial[i][j] === 0) {
                    countZero += 1;
                }
            }
        }

        if (countZero > 0){
            const randomPosition = Math.floor(Math.random()*countZero) + 1;
            let PositionOfZero = 0;
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (newCurrentInitial[i][j] === 0) {
                        PositionOfZero += 1;
                        if(randomPosition === PositionOfZero) {
                            currentInitial[i][j] = Rboard[i][j];
                            currentBoard[i][j] = Rboard[i][j];
                            setCurrentInitial([...currentInitial]);
                            setCurrentBoard([...currentBoard]);
                            break;
                        }
                    }
                }

                if(randomPosition === PositionOfZero) {
                    break;
                }
            }
        }
    }

    const handleCheckButton = () => {
        if (checkActive) {
            let tempCheckBoard = Iboard.map((row) => row.map(() => 0));;
            let tempCurrentBoard = currentBoard;
            console.log(tempCheckBoard)

            for(let i = 0; i < 9; i++) {
                let horizontalSet = [0,0,0,0,0,0,0,0,0,0];
                let verticalSet = [0,0,0,0,0,0,0,0,0,0];
                for (let j = 0; j < 9; j++) {
                    horizontalSet[tempCurrentBoard[i][j]] += 1;
                    verticalSet[tempCurrentBoard[j][i]] += 1;
                }

                for (let j = 0; j < 9; j++) {
                    if (tempCurrentBoard[i][j] !== 0){
                        if (horizontalSet[tempCurrentBoard[i][j]] > 1) {
                            tempCheckBoard[i][j] = -1;
                        }
                        else if (horizontalSet[tempCurrentBoard[i][j]] === 1 && tempCheckBoard[i][j] === 0){
                            tempCheckBoard[i][j] = 1;
                        }
                    }  
                    if (tempCurrentBoard[j][i] !== 0){ 
                        if (verticalSet[tempCurrentBoard[j][i]] > 1) {
                            tempCheckBoard[j][i] = -1;
                        }
                        else if (verticalSet[tempCurrentBoard[j][i]] === 1 && tempCheckBoard[j][i] === 0) {
                            tempCheckBoard[j][i] = 1;
                        }
                    }
                }
            }

            const a = [0,0,0,1,1,1,2,2,2];
            const b = [0,1,2,0,1,2,0,1,2];
            for (let i = 0 ; i < 9 ; i += 3) {
                for (let j = 0 ; j < 9 ; j += 3) {
                    let squareSet = [0,0,0,0,0,0,0,0,0,0];
                    for (let k = 0; k < 9; k++) {
                        squareSet[tempCurrentBoard[i + a[k]][j + b[k]]] += 1;
                    }

                    for (let k = 0; k < 9; k++) {
                        console.log()
                        if (tempCurrentBoard[i + a[k]][j + b[k]] !== 0) {
                            if (squareSet[tempCurrentBoard[i + a[k]][j + b[k]]] > 1) {
                                tempCheckBoard[i + a[k]][j + b[k]] = -1;
                            }
                            else if (squareSet[tempCurrentBoard[i + a[k]][j + b[k]]] === 1 && tempCurrentBoard[i + a[k]][j + b[k]] === 0){
                                tempCheckBoard[i + a[k]][j + b[k]] = 1;
                            }
                        }
                    }
                }
            }

            console.log(tempCheckBoard);
            setCheckBoard(tempCheckBoard);
        }
    }   

    const handleResetButton = async () => {
        const response = await axios.get('http://localhost:3005/sudoku')
        const data = response.data
        setRboard(data.Rboard);
        setIboard(data.Iboard);
        setBoardID(data.id);


    }

    const handleSubmitNameButton = async () => {
        let nameInput = document.getElementById("nameInput").value;
        let data = {
            id: boardID,
            name: nameInput,
            time: timer,
        }

        console.log(data);
        const res = await axios.put('http://localhost:3005/sudoku', data);
        console.log(res)

        interval = setInterval(() => {
            setTimer(timer => timer+1);
        }, 1000);

        handleResetButton();
    }

    return (
        <div className = 'board'>
            <div className='timer'> Time: {timer} sec.</div>
            <div className='cellall'>
            {currentBoard && currentBoard.map( (row,i) =>
                row.map((number,j) => {
                    return (
                        <Cell
                            key = {`cell ${i}-${j}`}
                            number = {number}
                            isInitial = {currentInitial[i][j]}
                            checkActive = {checkActive}
                            isCheck = {checkBoard[i][j]}
                            checkFunction = {handleCheckButton}
                            onChange = { (newNumber) => {
                                currentBoard[i][j] = newNumber
                                setCurrentBoard([...currentBoard])
                            }}
                    />)
                })
            )}
            </div>
            <button className ='submit-button' onClick = {handleSubmitButton}> Submit </button>
            <button className ='submit-button' onClick = {handleRestartButton}> Restart </button>
            <button className ='submit-button' onClick = {handleHintButton}> Hint </button>
            <button className ={`submit-button ${checkActive? 'check-button-active':''}`} 
                    onClick = {() => 
                        setCheckActive(!checkActive)}> 
                Check 
            </button>
            <button className ='submit-button' onClick = {handleResetButton}> Reset </button>
            <div className= {`status ${statusSubmit === 'Invalid'? 'invalid':'valid'}`}> {statusSubmit} </div>

            {
                statusSubmit === 'Valid'? 
                <div>
                    <input className='text-nameInput' id='nameInput' type='text' name = 'submit' placeholder='enter your name'/>
                    <button className='submitName-button' onClick={handleSubmitNameButton}> Submit </button>
                </div>:''
            }
        </div>
    );
}

export default Board;