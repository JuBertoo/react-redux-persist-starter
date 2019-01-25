import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import { urls, headers } from '../../utils/request'
import { watchToken } from '../../stores/actions/auth'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


export class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      loading: true
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
        this.setState({ ...response.data, loading: false })
        this.props.watchToken(response)
      })
      .then((error) => console.log(error))
  }

  render() {
    console.log(this.state)
    if (this.state.loading) {
      return null
    } else {
      return (
        <div className="centered-container">
          <div>
            <GridList cellHeight={160} className={''} cols={2}>
              {this.state.photo_urls.map((photo, idx, photos) => {
                return (
                  <GridListTile key={idx} cols={idx}>
                    <img src={photo} alt={idx} />
                  </GridListTile>
                )
              })}
            </GridList>
          </div>
        </div>
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
