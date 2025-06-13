import React, { Component } from 'react'


export default class ClassComponents extends Component {

  constructor(props){
    super(props)
    this.state={
      changed:false
    }
  }

    componentDidMount(){
        console.warn("component is mounted")
        console.log("changed :",this.state.changed)
    }


    componentDidUpdate(){
        console.warn("component is updated")
        console.log("changed :",this.state.changed)
    }


    componentWillUnmount(){
      console.log("component will unmomnt")
    }

    handleSubmit=()=>{
      this.setState({changed:true})
    }

  render() {
    return (
      <>
      <div>ClassComponents</div>
      <button onClick={this.handleSubmit}>submit</button>
      
      </>


    )
  }
}
