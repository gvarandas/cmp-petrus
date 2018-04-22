import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { addAgendamento } from '../actions/agendamentos';

class AgendarPaciente extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values, dispatch) {
    dispatch(addAgendamento(values));
    this.props.reset();
  }

  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className="col">
        <div className={className}>
          <label htmlFor={field.name}>{field.label}</label>
          <input type={field.type} className="form-control" {...field.input} />
          <div className="text-help">
            {touched ? error : ''}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="form-row">
          <Field
            name="nomePaciente"
            label="Nome"
            className="form-control"
            component={this.renderField}
            type="text"
            placeholder="Nome Paciente"
          />
        </div>
        <div className="form-row">
          <Field
            name="dpp"
            label="DPP"
            className="form-control"
            component={this.renderField}
            type="date"
          />
          <Field
            name="dum"
            label="DUM"
            className="form-control"
            component={this.renderField}
            type="date"
          />
        </div>
        <div className="form-row">
          <Field
            name="dataConsulta"
            label="Data Consulta"
            className="form-control"
            component={this.renderField}
            type="date"
          />
        </div>
        <button className="btn btn-primary" type="submit">Agendar</button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.nomePaciente) {
    errors.title = 'Informe o nome da Paciente';
  }
  if (!values.dpp) {
    errors.title = 'Informe a data prevista para o parto';
  }
  if (!values.dum) {
    errors.title = 'Informe a data da última menstruação';
  }
  if (!values.dataConsulta) {
    errors.title = 'Informe a data da Consulta';
  }

  return errors;
};

AgendarPaciente.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  touched: PropTypes.bool,
};

AgendarPaciente.defaultProps = {
  touched: false,
};

export default reduxForm({
  validate,
  form: 'agendarPacienteForm',
})(AgendarPaciente);
