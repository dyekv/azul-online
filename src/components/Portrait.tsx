import React from 'react'

const Portrait = ():JSX.Element => (
    <div style={{
        height:window.innerHeight,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'tomato',
        backgroundColor:'whitesmoke'
    }}>
        <div style={{paddingBottom:50}}>
            <img src='./landscape.png' style={{width:300}}/>
            <p style={{textAlign:'center'}}>画面を横にして遊んでね！ m(_ _)m</p>
        </div>
    </div>
)

export default Portrait