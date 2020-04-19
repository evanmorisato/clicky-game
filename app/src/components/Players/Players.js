import React from "react";
import './Players.css';

const Players = props => (
	<img src={props.image}
		alt={props.alt}
		className="img-thumbnail"
		onClick={() => props.handleIncrement(props.id)} />
)

export default Players;