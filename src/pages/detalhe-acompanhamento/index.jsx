import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DetalheAcompanhamento extends Component {
  constructor(props) {
    super(props);
    this.acompanhamento = null;
  }

  render() {
    const acompanhamentoId = this.props.match.params.id;
    if (!this.acompanhamento || this.acompanhamento.id !== acompanhamentoId) {
      this.acompanhamento = this.props.acompanhamentos[acompanhamentoId];
      this.paciente = this.props.pacientes[this.acompanhamento.pacienteId];
    }

    const { inicioPreNatal, dum, dpp, parto, bebe, pagamento } = this.acompanhamento;

    return (
      <div className="container">
        <div className="row">
          <Link className="btn btn-link" to="/agenda">
            &lt; Voltar
          </Link>
        </div>
        <div className="row">
          <h1>ACOMPANHAMENTO DE PACIENTE</h1>
        </div>
        {this.acompanhamento &&
          <div>
            <div className="row">
              <h4>{this.paciente.nome}</h4>
            </div>
            <div className="row">
              <div className="col-sm">
                <p>Início do Pré Natal: {inicioPreNatal}</p>
              </div>
              <div className="col-sm">
                <p>Data da Última Menstruação: {dum}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <p>Data Provável do Parto: {dpp}</p>
              </div>
              {parto &&
                <div className="col-sm">
                  <p>Data do Parto: {parto.data}</p>
                </div>
              }
            </div>
            { bebe &&
              <div className="row">
                <div className="col-sm">
                  <p>Nome do Bebê: {bebe.nome}</p>
                </div>
                <div className="col-sm">
                  <p>Sexo do Bebê: {bebe.sexo}</p>
                </div>
              </div>
            }
            { pagamento &&
              <div className="row">
                <div className="col-sm">
                  <p>Tipo do Pagamento: {pagamento.tipo}</p>
                </div>
                <div className="col-sm">
                  <p>Valor: {`R$ ${pagamento.valor}`}</p>
                </div>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

DetalheAcompanhamento.propTypes = {
  pacientes: PropTypes.object.isRequired,
  acompanhamentos: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  acompanhamentos: state.acompanhamentos,
  pacientes: state.pacientes,
});

export default connect(mapStateToProps)(DetalheAcompanhamento);
