import React, { Component } from "react";
import './App.css';
import GeneralSection from "./components/GeneralSection";

class App extends Component {
  constructor() {
    super();

    this.state = {
      info: { text: ''},
      cv: []
    }
  }

  handleChange = (e) => {
    this.setState({
      info: {
        text: e.target.value
      }
    })
  }

  onSubmitSection = (e) => {
    e.preventDefault();
    
  }

  render() {
    return <div id='App'>
      <div id="cv">
        <GeneralSection onButtonClicked={this.onSubmitSection} />
        <form id="educationSection" onSubmit={this.onSubmitSection}>
          <h2>Education Details</h2>
          <input type="text" id="companyInput" placeholder='Company' />
          <input type="text" id="positionInput" placeholder='Position'/>
          <input type="text" id="startDateInput" placeholder='Start Date'/>
          <input type="text" id="endDateInput" placeholder='End Date'/>
          <input type="text" id="descriptionEduInput" placeholder='Description'/>
          <button type='submit'>Submit</button>
        </form>
        <form id="workSection" onSubmit={this.onSubmitSection}>
          <h2>Work Experience</h2>
          <input type="text" id="programInput" placeholder='Course/Program' />
          <input type="text" id="universityInput" placeholder='University'/>
          <input type="text" id="startDateWorkInput" placeholder='Start Date'/>
          <input type="text" id="endDateWorkInput" placeholder='End Date'/>
          <input type="text" id="descriptionWorkInput" placeholder='Description'/>
          <button type='submit'>Submit</button>
        </form>
        <div id="skills">
          <h2>Skills</h2>
          <ul>
            <li>English</li>
            <li>Javascript</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </div>
  }
}

export default App;
