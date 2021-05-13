import AuthPage from './pages/authPage/AuthPage';
import GlobalStyle from './GlobalStyle';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/dashboard/Dashboard';
import PlansPage from './pages/plans/Plans';

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter basename = '/line_sale_dashboard'>
                <Switch>
                    <Route exact path="/" component={AuthPage} />
                    <Route path="/register" render={()=><AuthPage isRegister/>} />
                    <Route path="/home" component={DashboardPage} />
                    <Route path="/plans" component={PlansPage} />

                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;