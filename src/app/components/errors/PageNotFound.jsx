import React, {Component} from 'react';

class PageNotFound extends Component {
    render() {
        let divStyle = {
            display: 'table',
            margin: '0 auto',
            textAlign: 'center'
        };
        return (
            <div style={divStyle}>
                <h1>404 - Ooops!</h1>
                <p>This is not the page you are looking for...</p>
            </div>
        );
    }    
}

export default PageNotFound;
