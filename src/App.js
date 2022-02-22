import React from 'react';
import Layout from "./components/layout"
import './App.scss';

class App extends React.Component{

  state={
    authenticated:true
  }

  render(){
    return (
      <div className="App">
        <Layout authenticated={this.state.authenticated}/>
      </div>
    );
  }
}

export default App;
