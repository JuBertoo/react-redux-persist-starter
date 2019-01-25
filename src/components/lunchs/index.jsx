import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { urls, headers } from '../../utils/request'
import LunchCard from './LunchCard';
import {watchToken} from '../../stores/actions/auth'

// SPINNER
import { RiseLoader } from 'react-spinners';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lunchs: [],
      loading: true
    }
  }
  componentDidMount() {
    this.fetchLunchs()
  }

  fetchLunchs() {
    const { accessToken, uid, client } = this.props.authentification.auth;
    Axios.get(urls.lunchs, { headers: { headers, ["access-token"]: accessToken, uid, client } })
      .then((response) => {
        this.setState({ lunchs: response.data.lunch, loading: false })
        this.props.watchToken(response)
      })
      .then((error) => console.log(error))
  }
  showLunch(id){
    this.props.history.push(`/lunchs/${id}`)
  }
  render() {
    if (!this.state.loading) {
      return (
        <div style={{ padding: 20 }}>
          <Grid container spacing={16} alignItems="flex-start">
            {
              this.state.lunchs.map((lunch) => {
                return (
                  <Grid
                    key={`lunchCard${lunch.id}`} item xs={12} md={4}>
                    <div onClick={() => this.showLunch(lunch.id)}>
                      <LunchCard {...lunch} />
                    </div>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      )
    } else {
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
    }
  }
}


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  watchToken
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
