import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Top from '../../pages/Top'
import Login from '../../pages/Login'
import Rooms from '../../pages/Rooms'
import Room from '../../pages/Room'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/' component={Top} />
            <Route path='/login' component={Login}/>
            <Route path='/rooms' component={Rooms}/>
            <Route path='/room/:id' component={Room}/>
        </Switch>
    </BrowserRouter>
)

export default Router