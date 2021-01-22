import {firestore} from '../../firebase'
import {useState,useEffect} from 'react'
import {Box,Button} from '@chakra-ui/react'
import Header from '../../components/Header'
import {Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import {Search2Icon,LockIcon} from '@chakra-ui/icons'

const SearchInput = ():JSX.Element => {
    return (
        <InputGroup w='200px' mt='5px' mr='5px'>
            <InputLeftElement>
                <Search2Icon />
            </InputLeftElement>
            <Input  w='100%' bgColor='#E9EFF4'></Input>
        </InputGroup>
    )
}

interface Room {
    name:string,
    members:string[]
    password:string
}

interface RoomItemProps{
    room:Room
}

const RoomItem:React.FC<RoomItemProps> = (props:RoomItemProps) => {
    const {room} = props
    return (
        <Box shadow='md' m='10px' border='1px solid #DDD' borderRadius='5px' p='30px 10px'>
            <LockIcon color={room.password !== '' ?'#5F65CC':'white'} w={12} h={8}/>
            {room.name}
        </Box>
    )
}

const Rooms = ():JSX.Element => {
    const [rooms,setRooms] = useState<Room[]>([])
    const [status,setStatus] = useState('loading')
    useEffect(()=>{
        const f = async()=>{
            const roomList:Room[] = []
            const res = await firestore.collection('rooms').get()
            res.forEach(room=>roomList.push(room.data() as Room))
            setStatus((roomList.length > 0) ? 'success' : 'no room')
            setRooms(roomList)
            console.log(roomList)
            console.log(rooms)
         }
         f()
    },[])
    useEffect(()=>{
        console.log('rooms更新：',rooms)
    },[rooms])

    const roomList = rooms.map((room,idx)=><RoomItem key={idx} room={room}/>)
    const viewArea = status === 'success' ? <Box overflowX='scroll' h={window.innerHeight-50+'px'}>{roomList}</Box> : <p>{status}</p>
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