import {Box} from '@chakra-ui/react'

const Header:React.FC = (props) => {
    return(
        <Box w='100%' h='50px' bgColor='#5F65CC'>
            {props.children}
        </Box>
    )
}

export default Header