import React from "react"
import {Routes,Route} from "react-router-dom";
import Landing from "./landing/landing"
import Contact from "./contact/contact"
import About from "./about/about"
import Footer from "./fixed/footer"
import GoToTop from "./fixed/gototop"
import Navigation from "./fixed/navigation";
import Library from "./library/library";
import Students from "./students/students";
import Faculties from "./faculties/faculties";
import Courses from "./courses/courses";
import Signin from "./sign/signin"
import NavigationMob from './fixed/navigationMob'
import Loader from "./UI/loader"

class Layout extends React.Component{

    state={
        loading:true
    }

    componentDidMount=()=>{
        setTimeout(() => {
            this.setState({
                loading:false
            })
        }, 3000);
        // this.props.authHandler()
    }

    render(){

       if(this.state.loading){
           return <Loader/>
       } 

        return(
            <div class="layout">
                <Navigation authenticated={this.props.authenticated}/>
                <GoToTop/>
                <Routes>
                    <Route path="/" element={<Landing authenticated={this.props.authenticated}/>} />
                    <Route path="/students" element={<Students/>} />
                    <Route path="/faculties" element={<Faculties/>} />
                    <Route path="/courses" element={<Courses/>} />
                    <Route path="/library" element={<Library/>} />
                    <Route path="/signin" element={<Signin authHandler={this.props.authHandler}/>} />        
                </Routes>
                <Footer/>
            </div>
        )
    }
}

export default Layout