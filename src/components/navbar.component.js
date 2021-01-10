import React , { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

    render(){
        return (
            <nav className = " navbar navbar-dark bg-dark navbar-expand-lg ">
                <Link to="/" className=" navbar-brand">Exercise Tracker</Link>
                <div className= " collapse-navbar-collpse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            {/* Homepage Link */}
                            <Link to="/" className="nav-link">Exercises</Link> 
                        </li>
                        <li className="navbar-item">
                            {/* Create Exercise Link */}
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            {/* Link to user */}
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}