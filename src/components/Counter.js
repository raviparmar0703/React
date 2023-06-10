import { Component } from "react";
class Counter extends Component{
    constructor (){
        
        super();

        this.state ={
            counter: 0,
        };
        // this.increment=this.increment.bind(this)
    }

    increment =()=>{
        this.setState({
            counter:this.state.counter +1,
        })
    }
    decrement(){
      this.setState({
        counter:this.state.counter -1,
      }) 
    }

    render(){
        

        return (<div> <h1>Count value is:{this.state.counter}</h1>
       <button onClick={this.increment}>Increment</button>
       
       <button onClick={()=>this.decrement()}>Decrement</button>
       
        </div>)
     
    }
}
export default Counter;