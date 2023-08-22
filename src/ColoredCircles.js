import React from 'react';
import Circle from './Circle'



const ColoredCircles = () => {
    const circles = ['cornflowerblue', 'peachpuff', 'lavender']
    return (
	<div>
	    {circles.map((color,idx) => (
		<Circle color={color} idx={idx} key={idx} />
	    ))}
	</div>
    )
}

export default ColoredCircles;
