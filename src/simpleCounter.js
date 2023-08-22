import React, {  useState } from "react";

function SimpleCounter() {
    const [num, setNum] = useState(0);

    const clickUp = () => {
	setNum(num + 1); //current state and adding 1
    }

    //the callback function n=> n+1 only executes once all previous state changes have resolved.
    // passed the current state as argument and return new state.
    const clickUpBetter = () => {
	setNum(n => n + 1); //n is the current state 
    }

    const upByTwo = () => {
	setNum(num + 1); // 
	setNum(num + 1);// this line happens before previous line is finished. so this
	//routing ends up setting num to num + 1 not Num + 2
    }

    // the format of the callback that is passed to state setter function
    // the current state n is passed in and the new state is returned
        const upByTwoBetter = () => {
	setNum(n=>n+1); // 
	setNum(n=>n+1);

   } 


    
    return (
	<div className="counter">

	    <h3> Count: {num} </h3>
	    <button onClick={clickUpBetter}>Up</button>
	    <button onClick={upByTwoBetter}>Up-2</button>
	</div>
    );
}

export default SimpleCounter;
