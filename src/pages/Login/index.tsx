import {Box,Input,Button,Image} from '@chakra-ui/react'
import Center from '../../components/ui/Center'

const Login = () => {
    return (
    <Center>
        <Box 
            m="20px" 
            p="20px" 
            textAlign='center'
        >
            <Image src={process.env.PUBLIC_URL+'/logo.png'} alt='logo' maxW='400px'/>
        <Input 
            placeholder="名前を入力してください"
            m='5'
        />
        <Button
            mb='5'
        >決定</Button>
        </Box>
    </Center>
    )
}

export default Login