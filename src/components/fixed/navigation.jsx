import React, {Component} from "react"
import {NavLink, Outlet} from "react-router-dom"

class Navigation extends Component{

    render(){

      return (
           <div className="navigation">

               <div className="navigation__brandLogo">
                    <img src="{logo}" alt=""/>
               </div>
               <div className="navigation__items">
                   <NavLink  to="/" className="navigation__items_item navigation__items_item">Home</NavLink>
                   <NavLink  to="/about" className="navigation__items_item navigation__items_item">About</NavLink>
                   <NavLink  to="/contact" className="navigation__items_item navigation__items_item">Contact</NavLink>
                   <NavLink  to="/students" className="navigation__items_item navigation__items_item">Students</NavLink>
                   <NavLink  to="/faculties" className="navigation__items_item navigation__items_item">Faculties</NavLink>
                   <NavLink  to="/courses" className="navigation__items_item navigation__items_item">Courses</NavLink>
                   <NavLink  to="/library" className="navigation__items_item navigation__items_item">Library</NavLink>                   
               </div>
           </div>
      )
    }
}

export default Navigation;
