import React, { Component } from 'react'
import '../styles/ContactBox.css'

class ContactBox extends Component {
    render() {
        return(
            <div>
                <div className = 'test' >
                    <h1>lets work together.</h1>
                    <div className = 'contact-box-inputs' >
                        <input type = 'text' placeholder = 'Name'/>
                        <input type = 'text' placeholder = 'E-Mail' />
                        <input type = 'text' placeholder = 'Tell me what you want to get done' />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactBox;