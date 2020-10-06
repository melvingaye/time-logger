import React from 'react';
import TimersDashboard from './components/TimersDashboard'

function App() {
  return (
    <div className="main ui" id="main">
      <h1 className="ui dividing centered header">Timers</h1>
      <div id="content">
        <TimersDashboard/>
      </div>
    </div>
  );
}

export default App;
