import AuthPage from './pages/authPage/AuthPage';
import GlobalStyle from './GlobalStyle';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/dashboard/Dashboard';

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route path="/register" render={()=><AuthPage isRegister/>} />
                    <Route path="/home" component={DashboardPage} />

                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
