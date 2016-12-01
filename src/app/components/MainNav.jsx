import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

class MainNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <IndexLink to="/" className="navbar-brand">React, Babel, Webpack</IndexLink>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="activeClass"><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNav;
