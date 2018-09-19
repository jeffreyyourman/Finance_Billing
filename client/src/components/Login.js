import React, { Component } from 'react';
import axios from 'axios';
import '.././styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      loginEmail: '',
      loginPassword: ''
    }


    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    // this.handleRegisterChange = this.handleRegisterChange.bind(this);
    // this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }
  
    handleLoginChange(event) {
      let target = event.target;
      let value = target.value;
      let name = target.name;
      this.setState({
        [name]: value
      });
    }
    
  

    handleLoginSubmit(event) {
      axios.post('/login', {
        loginEmail: this.state.loginEmail,
        loginPassword: this.state.loginPassword
      });
      event.preventDefault();
      setTimeout(() => {
        window.location.reload();   
      }, 1000);
    }
  
  // handleRegisterChange(event) {
  //   let target = event.target;
  //   let value = target.value;
  //   let name = target.name
  //   console.log(value);
  //   this.setState({
  //     [name]: value
  //   });
  // }
  // handleRegisterSubmit(event) {
  //   axios.post('/register', {
  //     email: this.state.email,
  //     password: this.state.password,
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName
  //   });
  //   event.preventDefault();
  // }
  render() {
    return (
      <div className="full">
      <div className="container full">
        <div className="row">
          {/* <div className="col-md-4 reg">
          <form onSubmit={this.handleRegisterSubmit}>
            <h4>Register</h4>
              <div className="form-group">
                <label>
                  Email
                  <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleRegisterChange}/>
                </label>
              </div>

              <div className="form-group">
                <label>
                password
                  <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleRegisterChange}/>
                </label>
              </div>

              <div className="form-group">
                <label>
                first name
                  <input className="form-control" type="text" name="firstName" value={this.state.firstName} onChange={this.handleRegisterChange}/>
                </label>
              </div>
              <div className="form-group">
                <label>
                last name
                  <input className="form-control" type="text" name="lastName" value={this.state.lastName} onChange={this.handleRegisterChange}/>
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form> 
          </div> */}
          <div className="col-md-4 log">

            <form onSubmit={this.handleLoginSubmit}>
            <h4>Login</h4>
              <div className="form-group">
                <label>
                  Email
                  <input className="form-control" type="email" name="loginEmail" value={this.state.loginEmail} onChange={this.handleLoginChange}/>
                </label>
              </div>

              <div className="form-group">
                <label>
                password
                  <input className="form-control" type="password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleLoginChange}/>
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
