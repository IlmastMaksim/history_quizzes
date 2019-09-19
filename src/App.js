import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Main from './containers/Main/Main';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const Profile = React.lazy(() => {
  return import('./containers/Profile/Profile');
});

const Selecting = React.lazy(() => {
  return import('./containers/Tests/Selecting/Selecting');
});

const Completing = React.lazy(() => {
  return import('./containers/Tests/Completing/Completing');
});

const Creating = React.lazy(() => {
  return import('./containers/Tests/Creating/Creating');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const app = props => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);
  let routes;
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/tests" component={Selecting} />
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
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
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

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( app ) );
