import React, { Component } from 'react';
import './App.css';

const init = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  }

class App extends React.Component {
  state = init;
  validator = () => {
    let valid = false;
    const values = Object.values(this.state);

    // Check if field is empty
    const checkIfValid = value => {
      return value !== "";
    }

    // Loop through object, add/Remove error in input field
    for(let prop in this.state) {
      if(this.state[prop] == "") {
        document.getElementById(prop).classList.add('red')
      } else if(typeof this.state[prop] === 'string')
      document.getElementById(prop).classList.remove('red')
    }

    valid = values.every(checkIfValid);
    return valid;
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const alert = document.getElementById('alertMessage');

    if(this.validator()) {
      // Clear inputs and state
      this.setState(init);
      alert.classList.add('green');
      alert.innerText = 'Message successfully sent!';
      document.getElementById('contactForm').reset()
    } else {
      // Display error message
      alert.innerText = 'Please, fill in all the fields';
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Contact us</h1> 
        <form onSubmit={this.handleSubmit} id="contactForm">
          <input type="text" name="firstName" id="firstName" placeholder="First name" onChange={this.handleChange} />
          <input type="text" name="lastName" id="lastName" placeholder="Last name" onChange={this.handleChange} />
          <input type="email" name="email" id="email" placeholder="E-mail" onChange={this.handleChange} />
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message..." onChange={this.handleChange}></textarea>
          <button>Submit</button>
          <span id="alertMessage"></span>
        </form>
      </div>
      );
  }
}

export default App;
