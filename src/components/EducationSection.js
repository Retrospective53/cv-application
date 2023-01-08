import React, { Component } from "react";

class EducationSection extends Component {
    render() {
        return(
            <form id="workSection">
                <input type="text" id="programInput" placeholder='Course/Program' name="program" onChange={this.props.onChala}/>
                <input type="text" id="universityInput" placeholder='University' name="university" onChange={this.props.onChala}/>
                <input type="text" id="startDateWorkInput" placeholder='Start Date'name="startDate" onChange={this.props.onChala}/>
                <input type="text" id="endDateWorkInput" placeholder='End Date'name="endDate" onChange={this.props.onChala}/>
                <input type="text" id="descriptionWorkInput" placeholder='Description' name="description" onChange={this.props.onChala}/>
                <button type='button' onClick={this.props.onButtonClicked}>Delete</button>
            </form>
        )
    }
}

export default EducationSection;