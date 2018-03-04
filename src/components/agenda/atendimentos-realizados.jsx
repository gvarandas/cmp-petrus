import React, { Component } from 'react';

class AtendimentosRealizados extends Component {
  constructor(props) {
    super(props);
    this.pacientes = [
      {
        nome: 'SAMANTA PORTUGUEZ DE SOUZA GOMES',
        inicioPreNatal: '02/03/2017',
        dum: '02/03/2017',
        dpp: '07/12/2017',
        consulta: '07/04/2017',
        agendamento: '07/03/2017',
        finalizado: true,
      },
      {
        nome: 'ANA PAULA PRESTES DA COSTA',
        inicioPreNatal: '02/03/2017',
        dum: '02/03/2017',
        dpp: '07/12/2017',
        consulta: '07/04/2017',
        agendamento: '07/03/2017',
        finalizado: true,
      },
      {
        nome: 'RENATA RODRIGUES ABELHA',
        inicioPreNatal: '02/03/2017',
        dum: '02/03/2017',
        dpp: '07/12/2017',
        consulta: '07/04/2017',
        agendamento: '07/03/2017',
        finalizado: false,
      },
    ];
  }

  renderInfoAtendimento({ nome, inicioPreNatal, dum, dpp, finalizado }) {
    return (
      <tr key={nome}>
        <td>{nome}</td>
        <td className="text-center">{dum}</td>
        <td className="text-center">{dpp}</td>
        <td className="text-center">{inicioPreNatal}</td>
        <td className="text-center">
          {finalizado ?
            <span className="badge badge-success">OK</span>
            :
            <span className="badge badge-danger">PENDENTE</span>
          }
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
                <th>Início do Pré Natal</th>
                <th>DUM</th>
                <th>DPP</th>
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
