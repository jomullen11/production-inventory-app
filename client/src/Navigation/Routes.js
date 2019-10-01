import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../Components/Homepage'
import Survival from '../Components/Survival'
import Festival from '../Components/Festival'
import Home from '../Components/HomeInventory'
import Bedroom from '../Components/Bedroom'
import Kitchen from '../Components/Kitchen';

const Refresh = ({ path = '/' }) => (
    <Route
        path={path}
        component={({ history, location, match }) => {
            history.replace({
                ...location,
                pathname: location.pathname.substring(match.path.length)
            });
            return null;
        }}
    />
);

class Routes extends Component{
    render(){
        return(
            <div>
                {/* <Router> */}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/survival' component={Survival} />
                    <Route path='/kitchen' component={Kitchen} />
                    <Route path='/festival' component={Festival} />
                    <Route path='/home' component={Home} />
                    <Route path='/bedroom' component={Bedroom} />
                    <Refresh path="/refresh"/>
                </Switch>
                {/* </Router> */}
            </div>
        )
    }
}

export default Routes