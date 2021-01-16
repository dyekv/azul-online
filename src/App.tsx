import React,{useState,useEffect} from 'react';
import Portrait from './components/Portrait'

const App = () => {
  const [isPortrait,setIsPortrait] = useState(window.innerHeight > window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setIsPortrait(window.innerHeight > window.innerWidth)
    })
  })

  return (
    <div className="App">
      {isPortrait ? <Portrait/> : '横'}
    </div>
  );
}

export default App;