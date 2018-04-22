import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Pacientes extends Component {
  renderInfoPacientes() {
    return Object.keys(this.props.pacientes).map((pacienteId) => {
      const paciente = this.props.pacientes[pacienteId];
      const { nome, cpf } = paciente;
      return (
        <tr key={pacienteId}>
          <td>
            <Link className="btn btn-link" to={`/paciente/${pacienteId}`}>
              {nome}
            </Link>
          </td>
          <td className="text-center">{cpf}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Lista de Pacientes</h1>
        </div>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nome da Paciente</th>
                <th className="text-center">CPF</th>
              </tr>
            </thead>
            <tbody>
              {this.renderInfoPacientes()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Pacientes.propTypes = {
  pacientes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  pacientes: state.pacientes,
});

export default connect(mapStateToProps)(Pacientes);
