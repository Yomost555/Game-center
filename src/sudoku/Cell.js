import React from 'react'

function Cell(props) {
    
    return (
        <div    className = {`cell 
                            ${props.checkActive? props.isCheck === 1? 'checkright':'' :''}
                            ${props.checkActive? props.isCheck === -1? 'checkwrong':'' :''}
                            ${props.isInitial !== 0? 'initial':''}
                `}
                onClick = {() => {
                    if (props.isInitial === 0){
                        props.onChange((props.number+1)%10)
                    }

                    if (props.checkActive){
                        props.checkFunction();
                    }
                }}
        > 
            {props.number > 0 && props.number} 
        </div>
    )
}

export default Cell;