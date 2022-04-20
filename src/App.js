import DayRegistered from "./components/DayRegistered";
import { useState } from "react";
import PlayButton from "./components/PlayButton";
import Sidebar from "./components/Sidebar";

function App() {
  const [currentStatus, setCurrentStatus] = useState(true);

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <div className="header">
          <div className="header-action">
            <span class="timeDone">12:00</span>
            <PlayButton
              currentStatus={currentStatus}
              setCurrentStatus={setCurrentStatus}
            />
          </div>
        </div>
        <div className="body">
          <DayRegistered />
        </div>
      </div>
    </div>
  );
}

export default App;
