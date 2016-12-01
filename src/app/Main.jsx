import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import MainNav from './components/MainNav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

import PageNotFound from './components/errors/PageNotFound.jsx';

export default class Main extends Component {
    render() {
        return (
            <div>
                <MainNav/>
                <div className="container-fluid">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
            <Route path='*' component={PageNotFound} />
        </Route>
    </Router>,
    document.getElementById('app')
);