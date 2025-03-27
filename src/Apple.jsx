import React, { Component } from 'react'

export default class Apple extends Component {
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.stat.count-1})
    }
  render() {
    return (
        <>
      <div>Apple</div>
      <button onClick={this.increment}>Increment</button>
      {this.state.count}
      <button onClick={this.decrement}>Dcrement</button>
      </>
    )
  }
}
