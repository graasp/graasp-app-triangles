import React, { Component } from 'react';
import Qs from 'qs';
import PropTypes from 'prop-types';
import TeacherView from './teacher/TeacherView';
import StudentView from './student/StudentView';
import './App.css';

class App extends Component {
  static propTypes = {
    t: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    const { mode = 'default' } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    const { t } = this.props;
    this.state = { mode, t };
  }

  render() {
    const { mode, t } = this.state;

    switch (mode) {
      // show teacher view when in teacher mode
      case 'teacher':
        return <TeacherView />;

      // by default go with the student mode
      case 'student':
      default:
        return <StudentView t={t} />;
    }
  }
}

export default App;
