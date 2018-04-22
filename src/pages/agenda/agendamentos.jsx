import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ListaAgendamentos extends Component {
  renderInfoAgendamento({ pacienteId, dum, dpp, consulta, agendamento }) {
    const paciente = this.props.pacientes[pacienteId];
    return (
      <tr key={pacienteId}>
        <td>{paciente.nome}</td>
        <td className="text-center">{dum}</td>
        <td className="text-center">{dpp}</td>
        <td className="text-center">{consulta}</td>
        <td className="text-center">{agendamento}</td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container my-3 py-4">
        <div className="row">
          <h1>Agendamentos de Primeira Consulta</h1>
        </div>
        <div className="row my-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nome da Paciente</th>
                <th className="text-center">DUM</th>
                <th className="text-center">DPP</th>
                <th className="text-center">Consulta</th>
                <th className="text-center">Agendamento</th>
              </tr>
            </thead>
            <tbody>
              {this.props.agendamentos.map(agendamento => this.renderInfoAgendamento(agendamento))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ListaAgendamentos.propTypes = {
  agendamentos: PropTypes.array.isRequired,
  pacientes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  agendamentos: state.agendamentos,
  pacientes: state.pacientes,
});

export default connect(mapStateToProps)(ListaAgendamentos);
