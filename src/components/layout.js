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
import NavigationMob from './fixed/navigationMob'


class Layout extends React.Component{
    render(){
        // <Route path="/students">
        //             <Landing/>
        //         </Route>
        //         <Route path="/faculties">
        //             <Landing/>
        //         </Route>
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
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/about" element={<About/>} />              
                </Routes>
                <Footer/>
            </div>
        )
    }
}

export default Layout