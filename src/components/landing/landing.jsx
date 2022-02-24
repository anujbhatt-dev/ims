import React, {Component} from "react"
import FirstLook from "./firstlook";
import WhyManage from "./whymanage";
import About from "./about"
import Contact from "./contact"

class Landing extends Component{


    render(){

      return (
          <div classname="landing">
                <FirstLook authenticated={this.props.authenticated}/>
                <WhyManage />
                <About/>
                <Contact />
          </div>
      )
    }
}

export default Landing;
