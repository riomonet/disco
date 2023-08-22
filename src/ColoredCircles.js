import React, {useState} from 'react';
import Circle from './Circle'



const ColoredCircles = () => {

    const [colors, setColors] = useState( ['cornflowerblue', 'peachpuff', 'lavender'])

    let addColor = (newColor)  => {
	setColors(c => [...c, newColor])
    }
    
    return (
	<div>
	    {colors.map( (color,idx) => (
		<Circle color={color} idx={idx} key={idx} />
	    ))}
	    <button onClick={() => addColor('green') }> add Color </button>

	</div>
    )
}

export default ColoredCircles;
