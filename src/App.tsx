import React,{useEffect, useState} from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import PortraitChacker from './components/Portrait'
import Login from './pages/Login'

const App = () => {
  const [user,setUser] = useState('')
  useEffect(()=>{
    console.log('AppのuseEffect')
    setUser('')
  },[])
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