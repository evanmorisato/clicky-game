import React from 'react';
import './Main.css';

const Main = props => (
	<div className='container'>
		<div className='row'>
			<div className='col'>{props.children}</div>
		</div>
	</div>
);

export default Main;