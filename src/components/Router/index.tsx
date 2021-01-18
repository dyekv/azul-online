import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Top from '../../pages/Top'
import Login from '../../pages/Login'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path='/' component={Top} />
            <Route path='/login' component={Login}/>
        </Switch>
    </BrowserRouter>
)

export default Router