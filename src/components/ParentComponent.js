import React from 'react';
import Form from './Form';
import DisplayData from './DisplayData'

class ParentComponent extends React.Component{
    state = {
        firstName: "Josh",
        lastName: "M",
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value //as long as the name attribute matches the key in state this will work.
        })
      }
    
    //   handleLastNameChange = event => {
    //     this.setState({
    //       lastName: event.target.value
    //     })
    //   }

      render(){
          return(
              <div>

            <Form
            formData={this.state}
            handleChange={this.handleChange}
        
            />
          <DisplayData formData={this.state}/>
            </div>
          )
      }
}
export default ParentComponent