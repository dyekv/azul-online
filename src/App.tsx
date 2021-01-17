import React from 'react';
import PortraitChacker from './components/Portrait'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="App">
      <PortraitChacker>
        <Login/>
      </PortraitChacker>
    </div>
  );
}

export default App;