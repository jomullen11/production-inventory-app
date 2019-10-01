import React, { Component, Fragment } from 'react'
import NavBar from './Navigation/NavBar'
import Routes from './Navigation/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component{
    render(){
        return(
            <Fragment>
                    <Router>
                        <NavBar />
                        <Routes />
                    </Router>
            </Fragment>
        )
    }
}

export default App