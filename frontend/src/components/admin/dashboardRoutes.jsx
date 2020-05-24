import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Dashboard from "../../pages/Admin/Dashboard";
import Category from "../../pages/Admin/Category";
import StoreManagerDetails from "../../pages/Admin/StoreManagerDetails";
import history from './history';

export default class dashboardRoutes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/Category" component={Category} />
                    <Route path="/StoreManagerDetails" component={StoreManagerDetails} />
                </Switch>
            </Router>
        )
    }
}