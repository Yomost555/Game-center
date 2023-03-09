import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sudoku from './sudoku/'
import FourStar from './four-star'
import Home from './home'


function Router() {
    return(
        <Routes>
            <Route path = 'sudoku' element = {<Sudoku/>}/>
            <Route path = 'four-star' element ={<FourStar />}/>
            <Route path = '' element={<Home />}/>
        </Routes>
    )
}


export default Router;