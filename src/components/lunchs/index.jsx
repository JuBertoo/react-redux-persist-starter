import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Axios from 'axios';
import {urls, headers} from '../../utils/request'

class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      lunchs: []
    }
  }
  componentDidMount(){
    this.fetchLunchs()
  }
  
  fetchLunchs(){
    const {accessToken, uid, client} = this.props.authentification.auth;
    Axios.get(urls.lunchs, {headers: {headers, ["access-token"]: accessToken, uid, client}})
    .then((response) => {
      this.setState({lunchs: response.data.lunch})
      console.log(response)
    })
    .then((error) => console.log(error))
  }
  render() {
    return (
      <div>
        {
          this.state.lunchs.map((lunch) => {
            return <div>
              <h2>{lunch.title}</h2>
            </div>
          })
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
