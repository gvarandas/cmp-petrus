import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Agendamentos from './agendamentos';
import Atendimentos from './atendimentos';

class Agenda extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <select defaultValue="" className="form-control">
              <option value="">Selecione o Mês/Ano</option>
              <option>Janeiro/2018</option>
              <option>Fevereiro/2018</option>
              <option>Março/2018</option>
            </select>
          </div>
        </div>
        <div className="row">
          <Agendamentos />
          <Atendimentos />
        </div>
      </div>
    );
  }
}

export default Agenda;
