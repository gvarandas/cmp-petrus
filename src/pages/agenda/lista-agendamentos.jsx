import React, { Component } from 'react';
import AgendamentosMock from '../../data/agendamentos';

class ListaAgendamentos extends Component {
  constructor(props) {
    super(props);
    this.agendamentos = AgendamentosMock;
  }

  renderInfoAgendamento({ nome, dum, dpp, consulta, agendamento }) {
    return (
      <tr key={nome}>
        <td>{nome}</td>
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
          <h1>Lista de Agendamentos</h1>
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
