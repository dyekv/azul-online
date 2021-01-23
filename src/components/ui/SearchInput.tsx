import {Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'

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

export default SearchInput