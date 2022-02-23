import React from "react";
import construct from "../../assets/images/construct.svg"
import copyright from "../../assets/images/copyright.png"
import hammer from "../../assets/images/hammer.png"


class Footer extends React.Component{
    render(){ 
        return(
            <div className="footer">
                <div className="footer__first"><img src={construct}/></div>
                  <div className="footer__second">
                    <div className="footer__thanks">
                        thank you for managing with us
                    </div>
                    <div className="footer__copyright">
                        <img src={copyright} alt="copyright icon"/>
                        copyright rights to Anuj Bhatt And Maniraj Gurung
                    </div>
                    <div className="footer__construction">
                        <img src={hammer} alt="construction icon"/>
                        this website is under construction<br/>
                        आपकी असुविधा के लिए खेद है
                    </div>
                  </div>


            </div>
        )
    }
}

export default Footer