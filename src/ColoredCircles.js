import React, {useState} from 'react';
import Circle from './Circle'
import ColorButtons from './ColorButtons';


const ColoredCircles = () => {

    const [colors, setColors] = useState( ['cornflowerblue', 'peachpuff', 'lavender'])

    let addColor = (newColor)  => {
	setColors(c => [...c, newColor])
    }
    
    return (
	<div>
	    <ColorButtons addCircle={addColor} options={['red','yellow','blue']}/>
	    {colors.map( (color,idx) => (
		<Circle color={color} idx={idx} key={idx} />
	    ))}
	</div>
    )
}

export default ColoredCircles;
