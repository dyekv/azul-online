import {Box,Input,Button,Image,useToast} from '@chakra-ui/react'
import Center from '../../components/ui/Center'
import {useState} from 'react'
import {firestore} from '../../firebase'
import localforage from 'localforage'

const Login = () => {
    const [name,setName] = useState('')
    const toast = useToast()
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
        const addUser = await firestore.collection('users').add({name})
        localforage.setItem('user',{id:addUser.id,name})
        // TODO 部屋一覧へ遷移する
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