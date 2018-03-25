import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ContactBox.css'

class ContactBox extends Component {
    render() {
        return(
            <div>
                <div className = 'test' >
                    <h1>lets work together.</h1>
                    <div onClick = {this.props.f} >
                        {this.props.propName}
                    </div>                    
                    <div className = 'contact-box-inputs' >
                        <input type = 'text' placeholder = 'Whats Your Name?' className = 'input1' />
                        <input type = 'email' placeholder = 'Whats Your E-Mail?' className = 'input2' />
                        <textarea type = 'text' placeholder = 'Tell me what you want to get done.' className = 'input3' rows = '12'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactBox;