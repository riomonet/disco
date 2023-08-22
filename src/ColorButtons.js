import React from 'react';
import './ColorButtons.css'
import ColorButton from './ColorButton';


const ColorButtons = ({options, addCircle}) => {
        
    return (
	<div className="ColorButtons">
	    {options.map(color => (
		<ColorButton
		    color={color}
		    addCircle={addCircle}/>
	    ))}
	</div> 
    )
}

export default ColorButtons;
