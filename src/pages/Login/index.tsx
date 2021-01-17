import {Box,Input,Button} from '@chakra-ui/react'
import Center from '../../components/ui/Center'

const Login = () => {
    return (
    <Center>
        <Box 
            m="20" 
            p="20" 
            textAlign='center'
        >
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