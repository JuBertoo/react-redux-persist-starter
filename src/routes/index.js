import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Profile from '../components/Profile';
import Admin from '../components/Admin';
import { connect } from 'react-redux';
import AdminRouter from './AdminRouter';
import PublicRouter from './PublicRouter';

class AppRouter extends Component {
  render() {
    return (
      <div>
        {
          !window.location.href.includes('admin') &&
          <PublicRouter />
        }
        {
          window.location.href.includes('admin') &&
          <AdminRouter />
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));