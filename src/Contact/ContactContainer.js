import React, { Component } from 'react'
import './styles/ContactContainer.css'

class ContactContainer extends Component {
    render() {
        return(
            <div className = 'contact-container-main'>
                <div className = 'contact-container'>
                <video autoPlay muted loop id='myVideo' className = 'contact-video' >
                    <source src='DemoReel2k17.mp4' />
                </video>
                    <div className = 'contact-box' >
                    </div>
                </div>
            </div>
        )
    }
}


export default ContactContainer