import React from "react";
import college from "../../assets/images/college.jpg"
// import Aos from "aos"
// import "aos/dist/aos.css"

class FirstLook extends React.Component{

    componentDidmount=()=>{
        // Aos.init({
        //     duration: 1500,
        //     delay: 100
        //   });
    }


    render(){ 
        return(
            <div className="firstlook">
                  <figure className="firstlook__figure">
                      <img  className="firstlook__figure_img" src={college} alt="colllege image"/>
                      <figcaption className="firstlook__figure_cap" >
                          <div >welcome to himalayan institute of technology</div>
                          <button className="btn btn__white firstlook__figure_btn">Register Now</button>
                      </figcaption>
                      
                  </figure>
            </div>
        )
    }
}

export default FirstLook