import React from 'react'


const Dice = ({numDice = 6, title= 'Main Game' , maxVal = 20 }) => {

    const dice = [];
    for (let i = 0; i < numDice; i++){
	const num = Math.floor(Math.random() * maxVal) + 1
	dice.push(num)
}
    
    return (
	<div>
	    { dice.map(num => <div> {num} </div>) }
	</div>
    )
    
    
}

export default Dice
