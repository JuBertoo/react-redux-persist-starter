import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../components/auth/LoginForm';
import Lunchs from '../components/lunchs';
import NavBar from '../components/Navigation/NavBar';
import ShowLunch from '../components/lunchs/Show';

class PublicRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          {
            this.props.authentification.user.isConnected &&
            <React.Fragment>
              <Route exact path="/lunchs" component={Lunchs} />
              <Route exact path="/lunchs/:id" component={ShowLunch} />
            </React.Fragment>
          }
        </Switch>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicRouter));