import React, { Component } from "react";
import './App.css';
import GeneralSection from "./components/GeneralSection";
import WorkSection from "./components/WorkSection";
import EducationSection from "./components/EducationSection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: { 
        name: '',
        email: '',
        phoneNumber: '',
        description: '',
        
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
    const generalName = document.getElementById(generalName);
    const generalEmail = document.getElementById(generalEmail);
    const generalPhoneNumber = document.getElementById(generalPhoneNumber);
    const generalDescription = document.getElementById(generalDescription);
    generalName.value = this.state.info.name
    generalEmail.value = this.state.info.email
    generalPhoneNumber.value = this.state.info.phoneNumber
    generalDescription.value = this.state.info.description
  }

  onSubmitSection = (e) => {
    e.preventDefault();
    this.setState({
      cv: this.state.cv.concat(this.state.info),
      
    })
    setTimeout(() => console.log(this.state.cv,), 500
    )
    
  }

  onEditWork = (e) => {
    e.preventDefault();
    this.setState({
      info: {
        ...this.state.info,
        work: {
          ...this.state.info.work,
          [e.target.name]: [e.target.value] }
      }
    })
  }

  onEditEducation = (e) => {
    e.preventDefault();
    this.setState({
      info: {
        ...this.state.info,
        education: {
          ...this.state.info.education,
          [e.target.name]: [e.target.value] }
      }
    })
  }

  deleteWork = () => {
    delete this.state.info.work;
  }

  deleteEducation = () => {
    delete this.state.info.education;
  }

  render() {
    return <div id='App'>
      <div id="cv">
        <GeneralSection onButtonClicked={this.onSubmitSection} onChala={this.handleChangeCV} aaa={this.logee}/>
        <h2>Work Experience</h2>
        <WorkSection onChala={this.onEditWork} onButtonClicked={this.deleteWork}/>
        <button>Add</button>
        <h2>Education Details</h2>
        <EducationSection onChala={this.onEditEducation} onButtonClicked={this.deleteEducation}/>
        <div id="skills">
          <h2>Skills</h2>
          <ul>
            <li>English</li>
            <li>Javascript</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
      <div id="displayCV">
        <div id="displayGeneral">
          <p className="generalName">1.{this.state.info.name}</p>
          <p className="generalEmail">2.{this.state.info.email}</p>
          <p className="generalPhone">3.{this.state.info.phoneNumber}</p>
          <p className="generalDescription">4.{this.state.info.description}</p>
        </div>
        <div id="displayWork"></div>
        <div id="displayEducation"></div>
      </div>
    </div>
  }
}

export default App;
