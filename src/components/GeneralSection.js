import React, { Component } from 'react';

class GeneralSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <form id="generalSection" onSubmit={this.props.onButtonClicked}>
          <h2>Personal Details</h2>
          <input type="text" id="nameInput" placeholder='Name' />
          <input type="text" id="emailInput" placeholder='E-mail' />
          <input type="text" id="phoneInput" placeholder='Phone Number' /> 
          <input type="text" id="descriptionInput" placeholder='Description' />
          <button type='submit'>Submit</button>
        </form>
        );
    }
}

export default GeneralSection;