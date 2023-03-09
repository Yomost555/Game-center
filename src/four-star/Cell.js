import React from 'react'

function Cell(props) {

    return (
        <div 
            className =     {`cell 
                            ${props.tokenColor ===0? 'white-token':''}
                            ${props.tokenColor === 1? 'green-token':''}
                            ${props.tokenColor === 2? 'red-token':''}`
            }

            onClick = {props.onChange}
        >
        </div>
    )
}

export default Cell;