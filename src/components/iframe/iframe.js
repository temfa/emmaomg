import React from "react";

const Iframe = ({ link, iframe, title, action }) => {
	return (
		<div style={overlayDiv}>
			<div
				style={overlayStyle}
				onClick={() => {
					window.location.href = link;
				}}></div>
			<iframe
				src={iframe}
				title={title}
				frameBorder='0'
				onLoad={action}></iframe>
		</div>
	);
};

const overlayStyle = {
	position: "absolute",
	width: "100%",
	height: "100%",
};

const overlayDiv = {
	width: "100%",
	position: "relative",
	height: "100%",
};

export default Iframe;
