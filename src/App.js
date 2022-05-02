import DayRegistered from "./components/DayRegistered";
import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
	const [currentStatus, setCurrentStatus] = useState(false);
	const [time, setTime] = useState(0);

	const dayStartTimeRef = useRef();

	useEffect(() => {
		let interval;
		if (currentStatus) {
			let delta;

			interval = setInterval(() => {
				if (!delta) {
					delta = Date.now();
					return;
				}

				if (Math.abs(Date.now() - delta) >= 1000) {
					setTime((prevTime) => prevTime + 1);
					delta = Date.now();
				}
			}, 100);
		} else if (!currentStatus) clearInterval(interval);

		return () => clearInterval(interval);
	}, [currentStatus]);

	return (
		<div className="App">
			<Sidebar />
			<div className="content">
				<Header
					currentStatus={currentStatus}
					setCurrentStatus={setCurrentStatus}
					time={time}
				/>
				<div className="body">
					<DayRegistered currentStatus={currentStatus} />
				</div>
			</div>
		</div>
	);
}

export default App;
