import React from 'react'
import {Center} from '@chakra-ui/react'

const Centering:React.FC = (props)=>(
    <Center h={window.innerHeight}>
        {props.children}
    </Center>
)
export default Centering