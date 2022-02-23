import React, {Component} from "react"
import FirstLook from "./firstlook";
import Bighead from "../bighead";
import WhyManage from "./whymanage";

class Landing extends Component{

    render(){

      return (
          <div classname="landing">
                <FirstLook authenticated={this.props.authenticated}/>
                <WhyManage/>
          </div>
      )
    }
}


    export default Landing;
