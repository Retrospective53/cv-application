import React, { Component } from "react";
import './App.css';
import GeneralSection from "./components/GeneralSection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: { 
        name: '',
        email: '',
        phoneNumber: '',
        description: ''
      },
      cv: []
    }
  }

  logee = () => {
    console.log(this.state.info)

  }

  handleChangeCV = (e) => {
    this.setState({
      info: {
        ...this.state.info,
        [e.target.name]: e.target.value,
      }
    })
  }

  onSubmitSection = (e) => {
    e.preventDefault();
    this.setState({
      cv: this.state.cv.concat(this.state.info),
      
    })
    setTimeout(() => console.log(this.state.cv,), 500
    )
    
  }

  render() {
    return <div id='App'>
      <div id="cv">
        <GeneralSection onButtonClicked={this.onSubmitSection} onChala={this.handleChangeCV} aaa={this.logee}/>
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
