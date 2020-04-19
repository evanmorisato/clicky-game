import React from 'react';
import './Counters.css';

const Counters = props => (
	<div className='counters'>
		<h1>Current Score: {props.current} | High Score: {props.highScore}</h1>
	</div>
)

export default Counters;