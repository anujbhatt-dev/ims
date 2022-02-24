import React from "react";
import college from "../../assets/images/college.jpg"
import {
    useNavigate
} from "react-router-dom"
// import Aos from "aos"
// import "aos/dist/aos.css"


const FirstLook = (props) =>{
    const navigate = useNavigate();
    return(
        <div className="firstlook">
              <figure className="firstlook__figure">
                  <img  className="firstlook__figure_img" src={college} alt="colllege image"/>
                  <figcaption className="firstlook__figure_cap" >
                      <div >welcome to<br/>a.m institute management<br/> system</div>                      
                  </figcaption>
              </figure>
        </div>
    )
}


export default FirstLook;