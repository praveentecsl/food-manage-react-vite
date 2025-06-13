import React, { Component } from 'react'

export default class ClassComponents extends Component {

  constructor(props){
    super(props)
    this.setState({
      changed:false
    })
  }

    componentDidMount(){
        console.log("component is mounted")
        console.log("changed :",this.changed)
      }
      componentDidUpdate(){
        console.log("component is updated")
        console.log("changed :",this.changed)
    }
    componentWillUnmount(){
      console.log("component will unmomnt")
    }

    handleSubmit(){
      this.setState({
        changed:true
      })
    }

  render() {
    return (
      <>
      <div>ClassComponents</div>
      <button onClick={handleSubmit}>submit</button>
      
      </>


    )
  }
}
