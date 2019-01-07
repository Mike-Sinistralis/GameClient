import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

class Root extends Component {
  componentDidMount() {
    document.title = 'App Name';
  }

  render() {
    const {
      store,
      history,
    } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              component={PreNav}
            />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default Root;
