import React, { Component } from 'react';
import AgendamentosMock from '../../data/agendamentos';
import PacientesMock from '../../data/pacientes';

class ListaAgendamentos extends Component {
  constructor(props) {
    super(props);
    this.agendamentos = AgendamentosMock;
  }

  renderInfoAgendamento({ pacienteId, dum, dpp, consulta, agendamento }) {
    const paciente = PacientesMock[pacienteId];
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
              {this.agendamentos.map(agendamento => this.renderInfoAgendamento(agendamento))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaAgendamentos;
