import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HomeContainer from '../Home/HomeContainer'
import VideosContainer from '../Videos/VideosContainer'
import AboutContainer from '../About/AboutContainer'
import ContactContainer from '../Contact/ContactContainer'
import UserLoginContainer from '../UserLogin/UserLoginContainer'
import AdminContainer from '../Admin/AdminContainer'

class Routes extends Component {
    render() {
        return (
            <main>
                <Router>
                    <div>
                        <Route exact path = '/' component = {HomeContainer} />
                        <Route path = '/videos' component = {VideosContainer} />
                        <Route path = '/about' component = {AboutContainer} />
                        <Route path = '/contact' component = {ContactContainer} />
                        <Route path = '/admin' component = { AdminContainer } />
                    </div>
                </Router>
            </main>
        )
    }
}



export default Routes