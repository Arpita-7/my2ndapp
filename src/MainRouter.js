import React from "react";
import {Route,Switch} from "react-router-dom";
import Dashboard from "./core/Dashboard";
import Menu from "./core/Menu";
import Users from "./user/Users";
import Registration from "./user/Registration";
import Login from "./user/Login";
import Profile from "./user/Profile";


const MainRouter = () => (
    <div>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/registration" component={Registration}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/user/:userId" component={Profile}></Route>
           
        </Switch>
    </div>
);

export default MainRouter;