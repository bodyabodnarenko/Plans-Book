import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'

import { signUp } from "../../store/Actions/authActions";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.signUp(this.state)
  };
  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    if(this.props.auth.uid){
      return <Redirect to='/' />
    }
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <h5>Sign Up</h5>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Second Name</label>
            <input type="text" id="lastName" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.changeHandler} />
          </div>

          <div className="input-field ">
            <label  htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <button className="btn-large">Login</button>
          </div>
          <div className="red-text center">
            {this.props.authError ? <p>{this.props.authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    signUp: newUser => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
