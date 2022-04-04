import React, { Component } from 'react';
import { createBrowserHistory } from 'history'
const history = createBrowserHistory({basename: '/'})
class index extends Component {
    render() {
        return ( 
            <App history={history}/>
        );
    }
}

export default index;