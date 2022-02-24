import React from 'react';
import Layout from "./components/layout"
import './App.scss';

class App extends React.Component{

  state={
    authenticated:0
  }

  AuthHandler=()=>{
    this.setState({
      authenticated:!this.state.authenticated
    })
    this.props.history.push("/students")
  }

  render(){
    return (
      <div className="App">
        <Layout authHandler={this.AuthHandler} authenticated={this.state.authenticated}/>
      </div>
    );
  }
}

export default App;
