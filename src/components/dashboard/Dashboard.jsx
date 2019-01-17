import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'

export class Dashboard extends Component {
  render() {
    if(!this.props.auth.uid){
      return <Redirect to='/signin' />
    }
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 l3">
            <ProjectList projects={this.props.projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  firestoreConnect(["projects"]),
  connect(mapStateToProps)
)(Dashboard);
