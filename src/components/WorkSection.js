import React, { Component } from 'react';

class WorkSection extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        <form id="workSection" onSubmit={this.onButtonClicked}>
          <input type="text" id="companyInput" placeholder='Company' name='company' onChange={this.props.onChala}/>
          <input type="text" id="positionInput" placeholder='Position' name='position' onChange={this.props.onChala} />
          <input type="text" id="startDateInput" placeholder='Start Date' name='startDate' onChange={this.props.onChala} />
          <input type="text" id="endDateInput" placeholder='End Date' name='endDate' onChange={this.props.onChala} />
          <input type="text" id="descriptionEduInput" placeholder='Description' name='description' onChange={this.props.onChala} />
          <button type='button' onClick={this.props.onButtonClicked}>Delete</button>
        </form>
        );
    }
}

export default WorkSection;