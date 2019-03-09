import React, { Component } from "react";

export default props => {
	return (
		<div
			className={`changebutton ${props.timerOn ? "red" : "green"}`}
			onClick={props.timerOn ? props.stopTimer : props.startTimer}
		>
			<p>{props.timerOn ? "Stop Timer" : "Start Timer"}</p>
		</div>
	);
};
