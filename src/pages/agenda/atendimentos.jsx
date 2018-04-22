import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Atendimentos extends Component {
  constructor(props) {
    super(props);
    this.renderAtendimentos = this.renderAtendimentos.bind(this);
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

  renderAtendimentos() {
    const atendimentoIds = Object.keys(this.props.atendimentos);
    return atendimentoIds.map(atendimentoId => this.renderInfoAtendimento(this.props.atendimentos[atendimentoId]));
  }

  renderInfoAtendimento({ pacienteId, acompanhamentoId, inicioPreNatal, dum, dpp, data }) {
    const paciente = this.props.pacientes[pacienteId];
    const acompanhamento = this.props.acompanhamentos[acompanhamentoId];

    return (
      <tr key={`${pacienteId} - ${acompanhamentoId} - ${data}`}>
        <td>
          <Link className="btn btn-link" to={`/acompanhamento/${acompanhamentoId}`}>
            {paciente.nome}
          </Link>
        </td>
        <td className="text-center">{data}</td>
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
                <th className="text-center">Atendimento</th>
                <th className="text-center">DUM</th>
                <th className="text-center">DPP</th>
                <th className="text-center">Pré Natal</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.renderAtendimentos()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Atendimentos.propTypes = {
  atendimentos: PropTypes.object.isRequired,
  pacientes: PropTypes.object.isRequired,
  acompanhamentos: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  atendimentos: state.atendimentos,
  pacientes: state.pacientes,
  acompanhamentos: state.acompanhamentos,
});

export default connect(mapStateToProps)(Atendimentos);
