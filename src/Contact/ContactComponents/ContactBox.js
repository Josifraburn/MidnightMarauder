import React, { Component } from 'react'
import '../styles/ContactBox.css'

class ContactBox extends Component {
    render() {
        return(
            <div>
                <div className = 'test' >
                    <h1>lets work together.</h1>
                    <div className = 'contact-box-inputs' >
                        <input type = 'text' placeholder = 'Whats Your Name?' className = 'input1' />
                        <input type = 'email' placeholder = 'Whats Your E-Mail?' className = 'input2' />
                        <textarea type = 'text' placeholder = 'Tell me what you want to get done' className = 'input3' rows = '15'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactBox;