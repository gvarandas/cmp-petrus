import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class Agenda extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    // console.log('Submit!', values);
  }

  // renderField(field) {
  //   const { touched, error } = field.meta;
  //   const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  //   return (
  //     <div className={className}>
  //       <label htmlFor={field.name}>{field.label}</label>
  //       <input className="form-control" {...field.input} />
  //       <div className="text-help">
  //         {touched ? error : ''}
  //       </div>
  //     </div>
  //   );
  // }


  render() {
    const { handleSubmit, touched } = this.props;

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/">
            Back
          </Link>
        </div>
        <div>
          <h3>New Post</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              label="Title"
              name="title"
              component={this.renderField}
            />
            <Field
              label="Categories"
              name="categories"
              component={this.renderField}
            />
            <Field
              label="Post Content"
              name="content"
              component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

function validate(values) {
  // console.log('Validate', values);
  const errors = {};

  // Validate inputs
  if (!values.title) {
    errors.title = 'Enter a Title';
  }

  if (values.title && values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters long';
  }

  if (!values.categories) {
    errors.categories = 'Enter a Category';
  }

  if (!values.content) {
    errors.content = 'Enter some content, please';
  }

  // if errors is empty, the form is fine to submit
  return errors;
}

Agenda.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
};

export default reduxForm({
  validate,
  form: 'postsNewForm',
})(Agenda);
