import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../components/auth/LoginForm';
import Lunchs from '../components/lunchs';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginForm}/>
        {
          this.props.authentification.user.isConnected &&
          <Route exact path="/lunchs" component={Lunchs}/>
        }
      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));