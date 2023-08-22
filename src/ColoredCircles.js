import React, {useState} from 'react';
import Circle from './Circle'
import ColorButtons from './ColorButtons';

function getRandom(min=0, max = 100) {
    return Math.random() * (max - min) + min;
}

const ColoredCircles = () => {

    const [colors, setColors] = useState([])

    let addColor = (color)  => {
	setColors(c => [...c, {color, x: getRandom(), y: getRandom() }])
    }

    const changePosition = idx => {
	setColors(circles => {
	    const copy = [...circles];
	    copy[idx].x = getRandom();
	    copy[idx].y = getRandom();
	    return copy;
	})
    }

    return (
	<div>
	    <ColorButtons addCircle={addColor} options={['red','yellow','blue']}/>

	    { colors.map( ({color, x, y},idx) => (
		<Circle
		    changePosition={changePosition}
		    color={color}
		    idx={idx}
		    key={idx}
		    x={x}
		    y={y}
		/>
	    ))}
	</div>
    )
}

 

export default ColoredCircles;
