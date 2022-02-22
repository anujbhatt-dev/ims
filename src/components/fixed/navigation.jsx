import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class Navigation extends Component{

    render(){

      return (
           <div className="navigation">

               <div className="navigation__brandLogo">
                    <img src="{logo}" alt=""/>
               </div>
               <div className="navigation__items">
                   <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white"}}}  to="/" className="navigation__items_item navigation__items_item">Home</NavLink>
                   {
                       this.props.authenticated?
                       [
                        <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white"}}}  to="/students" className="navigation__items_item navigation__items_item">Students</NavLink>,
                        <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white"}}}  to="/faculties" className="navigation__items_item navigation__items_item">Faculties</NavLink>,
                        <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white"}}}  to="/courses" className="navigation__items_item navigation__items_item">Courses</NavLink>,
                        <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white"}}}  to="/library" className="navigation__items_item navigation__items_item">Library</NavLink>                   
                       ]:
                       null
                   }
                   <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white"}}}  to="/about" className="navigation__items_item navigation__items_item">About</NavLink>
                   <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white"}}}  to="/contact" className="navigation__items_item navigation__items_item">Contact</NavLink>
                   {
                          this.props.authenticated?
                          null:
                          [
                           <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white"}}}  to="/signup" className="navigation__items_item navigation__items_item">Signup</NavLink>,
                           <NavLink style={({isActive})=>{return {backgroundColor: isActive? "white":"transparent", color: isActive? "black":"white",border:"1px solid white"}}}  to="/signin" className="navigation__items_item navigation__items_item">Login</NavLink>
                          ]
                   }
               </div>
           </div>
      )
    }
}

export default Navigation;
