import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Top from '../../pages/Top'
import Login from '../../pages/Login'
import Rooms from '../../pages/Rooms'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/' component={Top} />
            <Route path='/login' component={Login}/>
            <Route path='/rooms' component={Rooms}/>
        </Switch>
    </BrowserRouter>
)

export default Router