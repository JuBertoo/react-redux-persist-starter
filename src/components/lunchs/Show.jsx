import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import { urls, headers } from '../../utils/request'
import Grid from '@material-ui/core/Grid';
import { watchToken } from '../../stores/actions/auth'
import { RiseLoader } from 'react-spinners';
import './styles/show.scss'

export class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: true,
      currentPhoto: ''
    }
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      this.setState({ id: this.props.match.params.id })
      this.fetchLunch(this.props.match.params.id)
    }
  }

  fetchLunch(id) {
    const { accessToken, uid, client } = this.props.authentification.auth;
    Axios.get(`${urls.lunchs}/${id}`, { headers: { headers, ["access-token"]: accessToken, uid, client } })
      .then((response) => {
        this.setState({ ...response.data, loading: false, currentPhoto: response.data.photo_urls[0] })
        this.props.watchToken(response)
      })
      .then((error) => console.log(error))
  }

  render() {
    console.log(this.state)
    if (this.state.loading) {
      return (
        <div className='RiseLoader centered-container'>
          <RiseLoader
            sizeUnit={"px"}
            size={15}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>
      )
    } else {
      return (
        <Grid container spacing={16} className="flex-center">
          <Grid xs={12} md={6} item className="medias-container">
            <div className="media-left">
              <img src={this.state.currentPhoto} width="100%" />
            </div>
            <div className="media-right">
              <ul>
                {
                  this.state.photo_urls.map((photo, idx) => {
                    return (
                      <li
                        key={`photo${idx}`}
                        onClick={() => this.setState({currentPhoto: photo})}
                      >
                        <img src={photo} width="100" />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </Grid>
        </Grid>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  watchToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)