import AuthPage from './pages/authPage/AuthPage';
import GlobalStyle from './GlobalStyle';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/dashboard/Dashboard';

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter basename = '/aushdnca'>
                <Switch>

                    <Route path="/home/plans" render={()=><DashboardPage type = "plan"/>} />
                    <Route path="/home" component={DashboardPage} />
                    <Route path="/register" render={()=><AuthPage type = "register"/>} />
                    <Route exact path="/plans" render={()=><AuthPage/>} />
                    <Route exact path="/" render={()=><AuthPage type = "signin"/>} />

                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;