import React, { Component } from 'react';

class GeneralSection extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        <form id="generalSection" onSubmit={this.props.onButtonClicked}>
          <h2>Personal Details</h2>
          <input type="text" id="nameInput" placeholder='Name' name='name' onChange={this.props.onChala}/>
          <input type="text" id="emailInput" placeholder='E-mail' name='email' onChange={this.props.onChala}/>
          <input type="text" id="phoneInput" placeholder='Phone Number' name='phoneNumber' onChange={this.props.onChala}/> 
          <input type="text" id="descriptionInput" placeholder='Description' name='description' onChange={this.props.onChala}/>
          <div>
            <button type='submit'>Save</button>
            <button type='button' onClick={this.props.aaa}>log</button>
          </div>
        </form>
        );
    }
}

export default GeneralSection;