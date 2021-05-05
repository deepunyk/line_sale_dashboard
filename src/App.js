import AuthPage from './pages/authPage/AuthPage';
import GlobalStyle from './GlobalStyle';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AuthPage} />
                    <Route path="/register" render={()=><AuthPage isRegister/>} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
