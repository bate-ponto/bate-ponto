import DayRegistered from './components/DayRegistered'
import { useState } from 'react'
import PlayButton from './components/PlayButton'

function App() {
  const [currentStatus, setCurrentStatus] = useState(true)

  return (
    <div className='App'>
	    <DayRegistered />
      <PlayButton currentStatus={currentStatus} setCurrentStatus={setCurrentStatus}/>
    </div>
  );
}

export default App;
