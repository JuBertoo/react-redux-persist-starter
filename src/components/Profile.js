import React, { Component } from 'react'
import {authAction, logOutAction} from '../stores/actions/auth'
import { connect } from 'react-redux';


class Profile extends Component {
  render() {
    return (
      <div>
        {
          // User login action with fake datas
        }
        <button
          onClick={() => this.props.authAction({userId: 1, isAdmin: true, username: 'Jh0n_D03', isConnected: true})}
        >Click ME to login as Admin</button>
        {
          // User logout action
        }
        <button
          onClick={() => this.props.logOutAction()}
        >Click ME to log out</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  authAction: (userData) => dispatch(authAction(userData)),
  logOutAction: () => dispatch(logOutAction())
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
