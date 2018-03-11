import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PacientesMock from '../../data/pacientes';
import AtendimentosMock from '../../data/atendimentos';
import AcompanhamentoMock from '../../data/acompanhamentos';

class Atendimentos extends Component {
  constructor(props) {
    super(props);
    this.atendimentos = AtendimentosMock;
  }

  renderStatus(status) {
    switch (status) {
      case 'finalizado':
        return <span className="badge badge-success">Finalizado</span>;
      case 'pagamento':
        return <span className="badge badge-warning">Pagamento</span>;
      case 'acompanhamento':
        return <span className="badge badge-primary">Acompanhamento</span>;
      default:
        return <span className="badge badge-success">?</span>;
    }
  }

  renderInfoAtendimento({ pacienteId, acompanhamentoId, inicioPreNatal, dum, dpp, data }) {
    const paciente = PacientesMock[pacienteId];
    const acompanhamento = AcompanhamentoMock[acompanhamentoId];
    return (
      <tr key={`${pacienteId} - ${acompanhamentoId} - ${data}`}>
        <td>
          <Link className="btn btn-link" to={`/acompanhamento/${acompanhamentoId}`}>
            {paciente.nome}
          </Link>
        </td>
        <td className="text-center">{dum}</td>
        <td className="text-center">{dpp}</td>
        <td className="text-center">{inicioPreNatal}</td>
        <td className="text-center">
          {this.renderStatus(acompanhamento.status)}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container mt-3 py-4">
        <div className="row">
          <h1>Atendimentos</h1>
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
              {Object.keys(this.atendimentos).map(atendimentoId => this.renderInfoAtendimento(this.atendimentos[atendimentoId]))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Atendimentos;
