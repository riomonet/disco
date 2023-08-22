//Passing a function from a parent componenet down to a child componenet
// refactor by dropping the 

import React, {useState } from 'react';
import NumberItem from './NumberItem'

const NumbersList = () => {

    const [numbers, setNumbers] = useState([2,5,7,11,12,18])

    const remove = ( num ) => {
	setNumbers(numbers.filter(n=> n !== num))
    }

    return (
 	<ul>
	    { numbers.map(n =>  (
		<NumberItem number={n} remove= {remove} />
	    ))}
	</ul>
    )
}


export default NumbersList;
