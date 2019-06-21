import React, {Component} from 'react';
import {Link} from "react-router"

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className="navButton"><Link to="">Home Page</Link></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;