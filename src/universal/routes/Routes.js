// Libraries
import React, { Component, Fragment } from  'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AnimatedSwitch } from 'react-router-transition';

import styles from 'universal/assets/styles/styles.scss';

// For Development only
import * as RouteMap from '../routes/static.js';
// This is used in production for code splitting via `wepback.config.server.js`
// import * as RouteMap from 'universal/routes/async.js';

const PrivateRoute = ({ component: Component, isAuthenticated, location, prevPath, ...rest }) => {
  if(location.pathname !== '/login') {
    return (
      <Route prevPath={prevPath} {...rest} render={props => {
          return (
            isAuthenticated ?
            (<Component {...props} prevPath={prevPath} location={location} />) :
            (<Redirect to={{pathname: '/login', state: { from: props.location }}} />)
          )
        }}
      />
    )
  }
  else return null;
}

export default class Routes extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      prevPath: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({ prevPath: this.props.location.pathname })
    }
  }

  render() {
    const { location, isAuthenticated } = this.props;
    return (
      <Fragment>
        <Switch>

          <Route exact path='/' component={RouteMap.HomeContainer} {...this.props} />
          <Route exact path='/event/:alias' component={RouteMap.EventContainer} {...this.props} />
          <Route exact component={RouteMap.HomeContainer} {...this.props} />
        </Switch>
      </Fragment>
    );
  }
}
