import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DetalhePaciente extends Component {
  constructor(props) {
    super(props);
    this.paciente = null;
  }

  render() {
    const pacienteID = this.props.match.params.id;
    if (!this.paciente || this.paciente.id !== pacienteID) {
      this.paciente = this.props.pacientes[pacienteID];
    }

    return (
      <div className="container">
        <div className="row">
          <Link className="btn btn-link" to="/pacientes">
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
  pacientes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStatetoProps = state => ({
  pacientes: state.pacientes,
});

export default connect(mapStatetoProps)(DetalhePaciente);
