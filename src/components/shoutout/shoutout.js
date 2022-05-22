import React from "react";
import "./shoutout.css";

const Shoutout = (props) => {
	return (
		<div
			className='shoutout-container'
			data-aos={props.direction}
			data-aos-duration='2000'
			data-aos-once='true'>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	);
};

export default Shoutout;
