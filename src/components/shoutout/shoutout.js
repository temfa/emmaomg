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
			<a href={props.sampleLink} target='_blank' className={props.acapella}>
				<p>Sample</p>
			</a>
		</div>
	);
};

export default Shoutout;
