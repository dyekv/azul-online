import {useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import {useContext} from 'react'


const Top = () => {
    const history = useHistory()
    const [user,setUser] = useContext(UserContext)
    const pushStart = () => {
        if(user){
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
        <div onClick={pushStart}>Top page</div>
    )
}

export default Top