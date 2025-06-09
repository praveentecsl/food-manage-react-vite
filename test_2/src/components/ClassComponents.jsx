import React, { Component } from 'react'

export default class ClassComponents extends Component {
    componentDidMount(){
        console.log("component is mounted")
    }
    componentDidUpdate(){
        console.log("component is updated")
    }
  render() {
    return (
      <div>ClassComponents</div>
    )
  }
}
