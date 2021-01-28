import {useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import {useContext} from 'react'
import {Image} from '@chakra-ui/react'
import Center from '../../components/ui/Center'


const Top = () => {
    const history = useHistory()
    const [user,setUser] = useContext(UserContext)
    const pushStart = () => {
        if(user){
            // ゲーム中に落ちたときは部屋に戻す
            if(user.playRoom){
                history.push('/room'+user.playRoom)
            }else{
                history.push('/rooms')
            }
        }else{
            history.push('/login')
        }
    }

    return (
        <div onClick={pushStart}>
            <Center>
                <div>
                    <Image src={process.env.PUBLIC_URL+'/logo.png'} alt='logo' maxW='400px'/>
                    <p style={{textAlign:'center',color:'#6495ED',fontWeight:700,fontSize:24}}>click start</p>
                </div>
            </Center>
        </div>
    )
}

export default Top