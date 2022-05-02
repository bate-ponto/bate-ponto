import React, { useEffect, useState } from "react";
import getCurrentTime from "../getCurrentTime";
import TimeRegistered from "./TimeRegistered";

export default function DayComponent({ currentStatus }) {
	const [children, setChildren] = useState([]);

	useEffect(() => {
		setChildren(prev => {
			if (currentStatus) {
				const newChild = {};
				newChild.beginTime = getCurrentTime();
				return [...prev, newChild];
			}

			if (prev.length > 0) {
				const child = prev.pop();
				child.endTime = getCurrentTime();
				child.duration = Math.abs(child.endTime - child.beginTime);
				return [...prev, child];
			}

			return [...prev];

		});
	}, [currentStatus]);

	return (
		<div className="day-container">
			{children.map((object, index) => {
				return (
					<TimeRegistered
						key={index}
						beginTime={object.beginTime}
						endTime={object.endTime}
						duration={object.duration}
						currentStatus={currentStatus}
						active={object.active}
					/>
				);
			})}
		</div>
	);
}
