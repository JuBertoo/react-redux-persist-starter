import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Show extends Component {

  render() {
    return (
      <div>
        IN SHOW
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)
