import React from 'react';
import './css/button.css';

export const Button = props => (
	<button className="comps-btn" onClick={props.onClick}>
		{props.text}
	</button>
);
