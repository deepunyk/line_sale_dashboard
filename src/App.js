import AuthPage from "./pages/authPage/AuthPage";
import GlobalStyle from "./GlobalStyle";
import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/dashboard/Dashboard";
import "antd/dist/antd.css";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home/plans" render={() => <DashboardPage type="plan" />} />
          <Route exact path="/home/total-collection" render={() => <DashboardPage index={1} />} />

          <Route path="/home" render={() => <DashboardPage index={0} />} />
          <Route path="/register" render={() => <AuthPage type="register" />} />
          <Route exact path="/plans" render={() => <AuthPage />} />
          <Route exact path="/" render={() => <AuthPage type="signin" />} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
