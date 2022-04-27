import DayRegistered from "./components/DayRegistered";
import Header from "./components/Header";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [currentStatus, setCurrentStatus] = useState(false);
  const [time, setTime] = useState(0);

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header
          currentStatus={currentStatus}
          setCurrentStatus={setCurrentStatus}
          time={time}
          setTime={setTime}
        />
        <div className="body">
          <DayRegistered currentStatus={currentStatus} />
        </div>
      </div>
    </div>
  );
}

export default App;
