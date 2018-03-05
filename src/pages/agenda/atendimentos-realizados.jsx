import React, { Component } from 'react';

import AtendimentosMock from '../../data/atendimentos';

class AtendimentosRealizados extends Component {
  constructor(props) {
    super(props);
    this.pacientes = AtendimentosMock;
  }

  renderStatus(status) {
    switch (status) {
      case 'finalizado':
        return <span className="badge badge-success">OK</span>;
      case 'pagamento':
        return <span className="badge badge-warning">Pagamento</span>;
      case 'acompanhamento':
        return <span className="badge badge-primary">Acompanhamento</span>;
      default:
        return <span className="badge badge-success">?</span>;
    }
  }

  renderInfoAtendimento({ nome, inicioPreNatal, dum, dpp, status }) {
    return (
      <tr key={nome}>
        <td>{nome}</td>
        <td className="text-center">{dum}</td>
        <td className="text-center">{dpp}</td>
        <td className="text-center">{inicioPreNatal}</td>
        <td className="text-center">
          {this.renderStatus(status)}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container mt-3 py-4">
        <div className="row">
          <h1>Atendimentos Realizados</h1>
        </div>
        <div className="row my-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nome da Paciente</th>
                <th className="text-center">Início do Pré Natal</th>
                <th className="text-center">DUM</th>
                <th className="text-center">DPP</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.pacientes.map(paciente => this.renderInfoAtendimento(paciente))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AtendimentosRealizados;
