import React, { useEffect } from "react";
import PlayButton from "./PlayButton";
import transformAsTime from "../transformAsTime";

export default function Header({
	currentStatus,
	setCurrentStatus,
	time,
}) {

	return (
		<div className="header">
			<div className="header-action">
				<span className="timeDone">{transformAsTime(time)}</span>
				<PlayButton
					currentStatus={currentStatus}
					setCurrentStatus={setCurrentStatus}
				/>
			</div>
		</div>
	);
}
