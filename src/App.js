import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';
import Profile from './containers/Profile/Profile'; 
import TestsPage from './containers/Tests/TestsPage/TestsPage';
import Creating from './containers/Tests/Creating/Creating';
import Completing from './containers/Tests/Completing/Completing';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    let routes;
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/tests" component={TestsPage} />
          <Route path="/creating" component={Creating} />
          <Route path="/completing" component={Completing} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      );
    }
    else {
      routes = (
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
