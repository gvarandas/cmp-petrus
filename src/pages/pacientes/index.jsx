// import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchPosts } from '../../actions';

import PacientesMock from '../../data/pacientes';

class Pacientes extends Component {
  renderInfoPacientes() {
    return Object.keys(PacientesMock).map((pacienteId) => {
      const paciente = PacientesMock[pacienteId];
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
    );
  }
}

export default Pacientes;
