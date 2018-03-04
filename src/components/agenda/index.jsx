import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ListaAgendamentos from './lista-agendamentos';
import AtendimentosRealizados from './atendimentos-realizados';

class Agenda extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 offset-10 align-items-end">
            <Link className="btn btn-primary" to="/">
              Back
            </Link>
          </div>
        </div>
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
          <ListaAgendamentos />
          <AtendimentosRealizados />
        </div>
      </div>
    );
  }
}

export default Agenda;
