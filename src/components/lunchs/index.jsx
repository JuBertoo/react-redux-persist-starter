import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { urls, headers } from '../../utils/request'
import LunchCard from './LunchCard';

// SPINNER
import { css } from '@emotion/core';
// First way to import
import { RiseLoader } from 'react-spinners';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

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
        console.log(response)
      })
      .then((error) => console.log(error))
  }
  render() {
    if (!this.state.loading) {
      return (
        <Grid container spacing={16}>
          {
            this.state.lunchs.map((lunch) => {
              return <Grid key={`lunchCard${lunch.id}`} item xs={12} md={4}>
                <LunchCard {...lunch} />
              </Grid>
            })
          }
        </Grid>
      )
    } else {
      return (
        <div className='RiseLoader centered-container'>
          <RiseLoader
            css={override}
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

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
