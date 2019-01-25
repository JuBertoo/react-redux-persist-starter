import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOutAction } from '../../stores/actions/auth'
import './Navbar.scss'
export class NavBar extends Component {
  logOut(e) {
    e.preventDefault();
    this.props.logOutAction()
    window.location.href = "/"
  }

  render() {
    console.log('PROPS', this.props)
    if (this.props.authentification.user.isConnected) {
      return (
        <nav className="navbar">
          <ul className="navlistLeft">
            <li> <NavLink to="/lunchs" >Lunchs</NavLink> </li>
          </ul>
          <ul className="navlistRight">
            <li> <a onClick={(e) => this.logOut(e)}>Se deconnecter</a> </li>
          </ul>
        </nav>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  logOutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
