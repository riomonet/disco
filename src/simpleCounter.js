import React, {  useState } from "react";

function SimpleCounter() {
    const [num, setNum] = useState(0);

    const clickUp = () => {
	setNum(num + 1); //current state and adding 1
    }

    const upByTwo = () => {
	setNum(num + 1); // 
	setNum(num + 1);// this line happens before previous line is finished. so this
	//routing ends up setting num to num + 1 not Num + 2
    }


    
    return (
	<div className="counter">

	    <h3> Count: {num} </h3>
	    <button onClick={clickUp}>Up</button>
	    <button onClick={upByTwo}>Up-2</button>
	</div>
    );
}

export default SimpleCounter;
