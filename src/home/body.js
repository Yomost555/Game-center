import React from 'react'

function Body() {

    return (
        <div>
            <div className = 'body'>
                <div className = 'head'>
                    GAME CENTER
                </div>
                <div className='credit'>
                    Created by Thitipong
                </div>
            </div>
            <div className='game-list'>
                <div className='img'>
                    <a href='http://localhost:3000/sudoku'>
                        <img src ={require('../img/sudoku.png')} title ='Go to sudoku'/>
                    </a>
                </div>
                <div className='img'>
                    <a href='http://localhost:3000/four-star'>
                        <img src ={require('../img/fourstar.jfif')} title ='Go to four star'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Body;