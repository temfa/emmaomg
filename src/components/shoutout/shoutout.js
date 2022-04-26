import React from "react";
import "./shoutout.css";

const Shoutout = (props) => {
	return (
		<div className='shoutout-container'>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	);
};

export default Shoutout;
