import React from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import PortraitChacker from './components/Portrait'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
      <PortraitChacker>
        <Login/>
      </PortraitChacker>
      </ChakraProvider>
    </div>
  );
}

export default App;