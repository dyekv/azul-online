import React,{useEffect, useState,createContext} from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import PortraitChacker from './components/Portrait'
import Router from './components/Router'
import localForage from 'localforage'
import {User} from './interfaces'

type userContextType = [User | undefined, (user?: User) => void];
export const UserContext = createContext<userContextType>([undefined,()=>undefined])

const App = () => {
  const [user,setUser] = useState<User|undefined>()
  const getUser = async() => {
    const user = await localForage.getItem<User>('user')
    if(user){
      setUser(user)
    }
  }

  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className="App">
      <ChakraProvider>
      <PortraitChacker>
        <UserContext.Provider value={[user,setUser]}>
        <Router/>
        </UserContext.Provider>
      </PortraitChacker>
      </ChakraProvider>
    </div>
  );
}

export default App;