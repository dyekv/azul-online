import React,{useEffect, useState} from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import PortraitChacker from './components/Portrait'
import Login from './pages/Login'
import localForage from 'localforage'
import {User} from './interfaces'

const App = () => {
  const [user,setUser] = useState('')

  const getUser = async() => {
    const user = await localForage.getItem<User>('user')
    if(user){
      setUser(user.name)
    }else{
      // go to 
    }
  }

  useEffect(()=>{
    console.log('AppのuseEffect')
    getUser()
  },[])
  return (
    <div className="App">
      <ChakraProvider>
      <PortraitChacker>
        {user}
        <Login/>
      </PortraitChacker>
      </ChakraProvider>
    </div>
  );
}

export default App;