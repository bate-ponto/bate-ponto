import React from "react";
import transformAsTime from "../transformAsTime";

export default function TimeRegistered({ beginTime, endTime, duration }) {
	return (
		<div className="time-container">
			<input className="description" type="text" />
			<div className="information-container">
				<div className="time">
					<span className="label">Started</span>
					<span className="info" name="beginTime">
						{transformAsTime(beginTime ?? 0)}
					</span>
				</div>
				<div className="time">
					<span className="label">Ended</span>
					<span className="info" name="endTime">
						{transformAsTime(endTime ?? 0)}
					</span>
				</div>
				<div className="time">
					<span className="label">Duration</span>
					<span className="info" name="duration">
						{transformAsTime(duration ?? 0)}
					</span>
				</div>
			</div>
		</div>
	);
}
