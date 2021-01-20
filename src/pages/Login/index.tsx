import {Box,Input,Button,Image,useToast,Spinner} from '@chakra-ui/react'
import Center from '../../components/ui/Center'
import {useState,useContext} from 'react'
import {firestore} from '../../firebase'
import localforage from 'localforage'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../App'

const Login = () => {
    const [name,setName] = useState('')
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useContext(UserContext)
    const toast = useToast()
    const history = useHistory()
    const onSubmit = async() => {
        if(name === ''){
            toast({
                status:'warning',
                description:'名前を入力してください',
                duration:3000,
                isClosable:true
            })
            return null
        }
        setLoading(true)
        const addUser = await firestore.collection('users').add({name})
        const userObj = {id:addUser.id,name,playRoom:''}
        localforage.setItem('user',userObj)
        setUser(userObj)
        history.push('/rooms')
    }

    if(loading){
        return <Center>
            <Spinner
                thickness="2px"
                speed="1s"
                emptyColor="gray.200"
                color="#6066CE"
            />
        </Center>
    }

    return (
    <Center>
        <Box 
            m="20px" 
            p="20px" 
            textAlign='center'
        >
            <Image src={process.env.PUBLIC_URL+'/logo.png'} alt='logo' maxW='400px'/>
        <Input 
            value={name}
            onChange={e=>setName(e.target.value)}
            placeholder="名前を入力してください"
            m='5'
        />
        <Button
            mb='5'
            onClick={onSubmit}
        >決定</Button>
        </Box>
    </Center>
    )
}

export default Login