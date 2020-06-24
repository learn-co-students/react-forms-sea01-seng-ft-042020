import React, { Component } from 'react'
import DisplayData from './DisplayData'

class Form extends Component {
    render() {
        return(
        <div>
            <form>
                <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName}/>
                <input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName}/>
            </form>
        </div>
        )
    }
}

export default Form