import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import Add from './containers/todo/add';
import TodoList from './containers/todo/list';

class PublicRoutes extends Component {

  render() {
    const {history} = this.props;
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route
            exact
            path={'/'}
            component={TodoList}
          />
          <Route
            exact
            path={'/add'}
            component={Add}
          />
        </div>
      </ConnectedRouter>
    );
  }
};

export default PublicRoutes;
