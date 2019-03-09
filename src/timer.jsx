import React, { Component } from "react";

export default props => {
	return (
		<p className="time">
			{props.minutes} minute{props.minutes != 1 ? "s" : ""}, {props.seconds}{" "}
			second{props.seconds != 1 ? "s" : ""}
		</p>
	);
};
