import {firestore} from '../../firebase'
import {useState,useEffect} from 'react'

// interface Room {
//     id:string
//     members:string[]
// }

const Rooms = ():JSX.Element => {
    const [rooms,setRooms] = useState<any[]>([])
    useEffect(()=>{
        const f = async()=>{
            const roomList:any[] = []
            const res = await firestore.collection('rooms').get()
            res.forEach(room=>roomList.push(room.data()))
            setRooms(roomList)
            console.log(roomList)
         }
         f()
    },[])
    return <div>{rooms.length > 0 ? rooms.map((room,idx)=><div key={idx}>{room.members}</div>) : ''}</div>
}

export default Rooms