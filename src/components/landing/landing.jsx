import React, {Component} from "react"
import FirstLook from "./firstlook";

class Landing extends Component{

    render(){

      return (
          <div classname="landing">
               <FirstLook authenticated={this.props.authenticated}/>
               <h1>Landing</h1>
          </div>
      )
    }
}


    export default Landing;
