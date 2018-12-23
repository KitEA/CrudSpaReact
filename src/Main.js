import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Users from "./components/Users";
import AddNewUser from "./components/AddNewUser";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <h1>Users Listing</h1>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/users" className="nav-link">Users</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/addNewUser" className="nav-link">Add New User</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/addNewUser" component={AddNewUser}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;