import React, { Component } from 'react';
import AgendarPaciente from '../../components/agendar-paciente';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>HOME</h1>
        </div>
        <div className="row">
          <AgendarPaciente />
        </div>
      </div>
    );
  }
}

export default Home;
