import React from 'react';
import { Alert, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Logo from '../logo.svg';

const TeacherView = () => (
  <div className="App">
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="Logo" />
      <h1 className="App-title">Welcome to the Graasp App Starter Kit</h1>
    </header>
    <Container className="App-body">
      <Alert color="primary">
        This is the teacher view. Switch to the student view by clicking on the URL below.
        <a href="?mode=student">
          <pre>{`${window.location.host}/?mode=student`}</pre>
        </a>
      </Alert>
    </Container>
  </div>
);

TeacherView.propTypes = {
  t: PropTypes.string.isRequired,
};

export default TeacherView;
