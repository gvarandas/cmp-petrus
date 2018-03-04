import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 offset-10 align-items-end">
            <Link className="btn btn-primary" to="/agenda">
              Agenda
            </Link>
          </div>
        </div>
        <div className="row">
          <h1>HOME</h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(Home);
