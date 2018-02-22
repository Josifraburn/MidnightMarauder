import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeContainer.css'



class HomeContainer extends Component {
    render() {
        return(
            <div className = 'main'>
                <video autoPlay muted loop id='myVideo'>
                    <source src='DemoReel2k17.mp4' />
                </video>
                <div className = 'home-nav-container'>
                    <div className = 'home-nav'>
                        <Link to = '/about' className = 'home-link'>
                            ABOUT
                        </Link>
                        <Link to = '/videos' className = 'home-link'>
                            VIDEOS
                        </Link>
                        <Link to = '/contact' className = 'home-link'>
                            CONTACT
                        </Link>
                        <Link to = '/login'>
                            <img src = 'usericon.png' className = 'nav-img'/>
                        </Link>
                    </div>
                </div>
                <h1 className = 'title'>
                    MIDNIGHT MARAUDER
                </h1>
            </div>
        )
    }
} 

export default HomeContainer