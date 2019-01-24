import React, { Component } from 'react'
import {connect} from 'react-redux'
import {authAction} from '../../stores/actions/auth'
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {Redirect} from 'react-router'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import {urls, headers} from '../../utils/request'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'david.messagerie@hotmail.fr',
      emailError: '',
      password: 'test1234',
      passwordError: ''

    }
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  login(e){
    ['email',  'password'].map((field) => {
      if(this.state[field].length === 0){
        return this.setState({[`${field}Error`]: `${field} doit être remplit `})
      } else {
        return this.setState({[`${field}Error`]: ''})
      }
    })

    Axios.post(urls.login, this.state, {headers: headers.default})
    .then((response) => {
      const {uid, client} = response.headers
      let accessToken = response.headers["access-token"]
      Axios.get(urls.validateToken, {params: {uid, client, ["access-token"]: accessToken}})
      .then((response) => {
        accessToken = response.headers["access-token"] != "" ? response.headers["access-token"] : accessToken
        this.props.authAction(response.data.data, {uid, client, accessToken})
        return window.location.href = "/lunchs"
      })
      .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
  }
  render() {
    if(this.props.authentification.user.isConnected){
      return <Redirect to='/lunchs'/>
    }
    return (
      <div className="centered-container">
        <div>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={0}>
                <form className="centered-form">
                  <div>
                    <TextField
                      required
                      error={this.state.emailError.length > 0}
                      fullWidth
                      id="email-input"
                      label={this.state.emailError.length > 0 ? this.state.emailError : 'Email'}
                      className={"login-input input"}
                      value={this.state.email}
                      onChange={(event) => this.handleChange(event, 'email')}
                      margin="normal"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      error={this.state.passwordError.length > 0}
                      fullWidth
                      id="password-input"
                      label={this.state.passwordError.length > 0 ? this.state.passwordError : 'Mot de passe'}
                      className={"login-input input"}
                      value={this.state.password}
                      onChange={(event) => this.handleChange(event, 'password')}
                      margin="normal"
                      type="password"
                    />
                  </div>
                  <div className="centered">
                    <Button
                      variant="contained" 
                      color="primary"
                      onClick={(e) => this.login(e)}
                      >
                      Se connecter
                    </Button>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  authAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
