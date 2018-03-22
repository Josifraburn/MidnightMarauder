import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/ContactContainer.css'

class ContactContainer extends Component {

    state = {
        contactTitleContainer: 'contact-title-container',        
    }

    contactClick = () => {
        this.setState({
            contactTitleContainer: 'contact-title-container-hidden'
        })
        console.log('Hello this is working')
    }


    render() {
        return(
            <div className = 'contact-container-main'>
                <div className = 'contact-container'>
                    <div className = {this.state.contactTitleContainer} >
                        <Link to = '/' className = 'contact-go-back'>
                            GO BACK
                        </Link>
                    </div>
                    <video autoPlay muted loop id='myVideo' className = 'contact-video' >
                        <source src='DemoReel2k17.mp4' />
                    </video>
                    <div className = {this.state.contactTitleContainer} >
                        <h1 className = 'contact-title' onClick = {this.contactClick} >
                            contact.
                        </h1> 
                    </div>
                    <div className = {this.state.contactTitleContainer} > 
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
            </div>
        )
    }
}


export default ContactContainer