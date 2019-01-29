import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import { logOutAction } from '../../stores/actions/auth'
import './Navbar.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { GoGear } from "react-icons/go";
import { MdPerson, MdNotifications } from "react-icons/md";
import { GiApothecary } from "react-icons/gi";
import { FaRegCalendarAlt, FaRegListAlt } from "react-icons/fa";


export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logOut(e) {
    e.preventDefault();
    this.props.logOutAction()
    window.location.href = "/"
  }

  render() {
    console.log('PROPS', this.props)
    if (this.props.authentification.user.isConnected) {
      const companyName = this.props.authentification.user.company.name
      return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{companyName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/"><GiApothecary /> Proposer un Lunch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><FaRegCalendarAlt /> Participer à un Lunch</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><FaRegListAlt /> Mes créations/participations</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <MdNotifications />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Mes notifications
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <MdPerson />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Mon profil
                  </DropdownItem>
                  <DropdownItem>
                    Préférences
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <GoGear />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <div  onClick={(e) => this.logOut(e)}>
                      Se deconnecter
                    </div>
                  </DropdownItem>
                  {
                    this.props.authentification.user.admin &&
                    <React.Fragment>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavLink href="http://app.lunchsdubureau.com/admin">
                          Admin
                        </NavLink>
                      </DropdownItem>
                    </React.Fragment>
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
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


{/* <nav className="navbar">
          <ul className="navlistLeft">
            <li> <NavLink to="/lunchs" >Lunchs</NavLink> </li>
          </ul>
          <ul className="navlistRight">
            <li> <a onClick={(e) => this.logOut(e)}>Se deconnecter</a> </li>
          </ul>
        </nav> */}