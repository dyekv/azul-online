import {firestore} from '../../firebase'
import {useState,useEffect} from 'react'
import {Box,Button,SimpleGrid} from '@chakra-ui/react'
import Header from '../../components/Header'
import SearchInput from '../../components/ui/SearchInput'
import {LockIcon} from '@chakra-ui/icons'
import {useHistory} from 'react-router-dom'
import Center from '../../components/ui/Center'


// TODO room内にmemberサブコレクションを作成し、階層構造にする（Firebase側で管理する）

interface Room {
    id:string
    name:string
    members:Member[]
    password:string
}

interface Member{
    id:string
    name:string
}

interface RoomItemProps{
    room:Room
}

const RoomItem:React.FC<RoomItemProps> = (props:RoomItemProps) => {
    const history = useHistory()
    const {room} = props
    const gotoRoom = (id:string) => {
        history.push('/room/'+id)
    }
    return (
        <SimpleGrid shadow='md' m='10px' border='1px solid #DDD' borderRadius='5px' p='25px 10px' columns={2} onClick={()=>gotoRoom(room.id)}>
            <Box display='flex'>
                <LockIcon color={room.password !== '' ?'#5F65CC':'white'} w={12} h={8} />
                {room.name}
            </Box>
            <SimpleGrid columns={2}>
                {room.members.map(member=><Box key={member.id}>{member.name}</Box>)}
            </SimpleGrid>
        </SimpleGrid>
    )
}

const Rooms = ():JSX.Element => {
    const [rooms,setRooms] = useState<Room[]>([])
    const [status,setStatus] = useState('loading')
    useEffect(()=>{
        const getRooms = async()=>{
            const roomList:Room[] = []
            const res = await firestore.collection('rooms').get()
            res.forEach(room=>{
                const roomData = {id:room.id,...room.data()}
                roomList.push(roomData as Room)
            })
            setStatus((roomList.length > 0) ? 'success' : 'no room')
            setRooms(roomList)
         }
         getRooms()
         const SubscribeRooms = ()=>{
            firestore.collection('rooms').onSnapshot(()=>{
                getRooms()
            })
         }
         SubscribeRooms()
         return ()=>{
             SubscribeRooms()
         }
    },[])

    // roomsが更新されたとき、メンバー情報を取得しにいく → やめる、サブコレクションごとGETする
    // useEffect(()=>{
    //     const f = async()=>{
    //         console.log('ここ来てる')
    //         // const members:Member[] = []
    //         rooms.forEach(async(room)=>{
    //             console.log('ここまわる')
    //             const member = await room.members.map((memberId) => {
    //                 // const res = await firestore.collection('users').doc(memberId).get()
    //                 // console.log({id:res.id,...res.data()})
    //                 return {id: "hQsnf4bY0P4RdMP3N12H", name: "たろう"}
    //                 // return {id:res.id,...res.data()}
    //             })
    //             console.log({member})
    //         })
    //     }
    //     if(rooms.length > 0){
    //         f()
    //     }
    // },[rooms])
    

    const roomList = rooms.map((room,idx)=><RoomItem key={idx} room={room}/>)
    const viewArea = status === 'success' ? <Box overflowX='scroll' h={window.innerHeight-50+'px'}>{roomList}</Box> : <Center><p>{status}</p></Center>
    const createRoom = () => {}


    return (
    <div>
        <Header>
            <Box display='flex' justifyContent='flex-end'>
                <SearchInput/>
                <Button mt='5px' mr='20px'onClick={createRoom}>名前で検索</Button>
                <Button mt='5px' mr='20px'onClick={createRoom}>部屋を作る</Button>
            </Box>
        </Header>
        {viewArea}
        {/* <button onClick={()=>console.log(testArr)}>view test</button> */}
    </div>)
}

export default Rooms