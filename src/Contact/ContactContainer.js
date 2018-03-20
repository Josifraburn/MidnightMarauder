import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/ContactContainer.css'

class ContactContainer extends Component {
    render() {
        return(
            <div className = 'contact-container-main'>
                <div className = 'contact-container'>
                    <Link to = '/' className = 'contact-go-back'>
                        GO BACK
                    </Link>
                    <video autoPlay muted loop id='myVideo' className = 'contact-video' >
                        <source src='DemoReel2k17.mp4' />
                    </video>
                        <h1 className = 'contact-title' >
                            contact.
                        </h1>
                    <div className = 'contact-social'>
                        <a href=''>
                            <img src = 'facebookicon.svg' className = 'facebook-icon' />
                        </a>
                        <a href=''>
                            <img src = 'twittericon.svg' className = 'facebook-icon' />
                        </a>
                        <a href=''>
                            <img src = 'youtubeicon.svg' className = 'facebook-icon' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}


export default ContactContainer