import React,{useState,useEffect} from 'react'


const Portrait:React.FC = props => {
    const [isPortrait,setIsPortrait] = useState(window.innerHeight > window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
        setIsPortrait(window.innerHeight > window.innerWidth)
        })
    })

    if(!isPortrait){
        return (
            <div>{props.children}</div>
        )
    }
    return (
        <div style={{
            height:window.innerHeight,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'tomato',
            backgroundColor:'whitesmoke'
        }}>
            <div style={{paddingBottom:50}}>
                <img src='./landscape.png' alt='横画面にして遊んでください' style={{width:300}}/>
                <p style={{textAlign:'center'}}>画面を横にして遊んでね！</p>
            </div>
        </div>
    )
}
export default Portrait
