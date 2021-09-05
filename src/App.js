import AuthPage from "./pages/authPage/AuthPage";
import GlobalStyle from "./GlobalStyle";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/dashboard/Dashboard";
import "antd/dist/antd.css";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/home/plans"
            render={() => <DashboardPage type="plan" />}
          />
          <Route
            exact
            path="/home/total-collection"
            render={() => <DashboardPage index={1} />}
          />
          <Route
            exact
            path="/home/daily-sales"
            render={() => <DashboardPage index={2} />}
          />
          <Route
            exact
            path="/home/sales-person-wise-report"
            render={() => <DashboardPage index={4} />}
          />
          <Route
            exact
            path="/home/product-wise-sales-report"
            render={() => <DashboardPage index={5} />}
          />
          <Route
            exact
            path="/home/retailer-wise-sales-report"
            render={() => <DashboardPage index={6} />}
          />
          <Route
            exact
            path="/home/retailer-wise-outstanding-report"
            render={() => <DashboardPage index={9} />}
          />
          <Route
            exact
            path="/home/sales-person-wise-outstanding-report"
            render={() => <DashboardPage index={7} />}
          />
          <Route
            exact
            path="/home/product-wise-outstanding-report"
            render={() => <DashboardPage index={8} />}
          />
          <Route
            exact
            path="/home/stock-report"
            render={() => <DashboardPage index={3} />}
          />
          <Route
            exact
            path="/home/sales-person-wise-ledger"
            render={() => <DashboardPage index={10} />}
          />
          <Route
            exact
            path="/home/retailer"
            render={() => <DashboardPage index={11} />}
          />
          <Route
            exact
            path="/home/retailer/bill"
            render={() => <DashboardPage index={12} />}
          />

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
