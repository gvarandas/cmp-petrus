import React, { Component } from 'react';

class ListaAgendamentos extends Component {
  constructor(props) {
    super(props);
    this.agendamentos = [
      {
        nome: 'ADRIANA SABOIA GRUBER',
        dum: '02/03/2017',
        dpp: '07/12/2017',
        consulta: '07/04/2017',
        agendamento: '07/03/2017',
      },
      {
        nome: 'LAIS GUIMARAES GOMES',
        dum: '02/03/2017',
        dpp: '07/12/2017',
        consulta: '07/04/2017',
        agendamento: '07/03/2017',
      },
      {
        nome: 'LIVIA KNOP HENRIQUE MODESTO',
        dum: '02/03/2017',
        dpp: '07/12/2017',
        consulta: '07/04/2017',
        agendamento: '07/03/2017',
      },
    ];
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
