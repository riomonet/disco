import React from 'react';
import "./Circle.css";
	 
const Circle = ({color,idx,x,y, changePosition}) => {

    console.log(color)
    return (
	<div
	    onClick={ ()=> changePosition(idx) }
		className="Circle"
		style = {{
		    banckgroundColor: color,
		    position: 'absolute',
		    top: `${y}vh`,
		    left: `${x}vw`
		}}

	     > {idx + 1}
	    </div>
    )
}
 
export default Circle;
