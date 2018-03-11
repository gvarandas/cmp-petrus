// import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchPosts } from '../../actions';

import Pacientes from '../../data/pacientes';

class DetalhePaciente extends Component {
  constructor(props) {
    super(props);
    this.paciente = null;
  }

  render() {
    const pacienteID = this.props.match.params.id;
    if (!this.paciente || this.paciente.id !== pacienteID) {
      this.paciente = Pacientes[pacienteID];
    }

    return (
      <div className="container">
        <div className="row">
          <Link className="btn btn-link" to="/agenda">
            &lt; Voltar
          </Link>
        </div>
        <div className="row">
          <h1>DETALHE PACIENTE</h1>
        </div>
        <div className="row">
          {
            this.paciente ?
              <h4>Paciente: {this.paciente.nome}</h4>
            :
              <h4>Paciente não Localizado</h4>
          }
        </div>
      </div>
    );
  }
}

DetalhePaciente.propTypes = {
  match: PropTypes.object.isRequired,
};

export default DetalhePaciente;
