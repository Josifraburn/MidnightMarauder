import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeContainer.css'


class HomeContainer extends Component {
    render() {
        return(
            <div className = 'main'>
                <div>
                    <Link to = 'ABOUT'>
                        ABOUT
                    </Link>
                    <Link to = 'VIDEOS'>
                        VIDEOS
                    </Link>
                    <Link to = 'CONTACT'>
                        CONTACT
                    </Link>
                </div>
                <h1 className = 'title'>
                    MIDNIGHT MARAUDER
                </h1>
            </div>
        )
    }
} 

export default HomeContainer