import React, {Component} from 'react'

export default class New extends Component{



    constructor(){
        super();

        this.state = {
            show:true
        };
        console.log("constructorpp");
    }

    componentDidMount(){
        console.log("Mounted")
    }

    render(){
       console.log("updating"); 

        return(
            <>
                <h1>This is a new one </h1>
                {
                   this.state.show ?  <h1>praveeeen</h1> : <h1>praveen chandeepa</h1>
                }

                <button onClick={()=>{this.setState({show: !this.state.show})}}>change the state</button>
            
            
            </>
        )
    }
}
