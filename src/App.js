import React, { Component } from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text'
        }
    }
    update(e){
        this.setState({txt: e.target.value})
    }
    render(){
        return (
            <div>
                <Widget update={this.update.bind(this)}/>
                <h1>{this.state.txt}</h1>
                <h2>{this.props.txt}</h2>
            </div>
        )
    }
}

const Widget = (props) =>
    <input type="text" onChange={props.update} />

export default App;