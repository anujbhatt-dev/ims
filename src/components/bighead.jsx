import React from "react";



const BigHead = (props) =>{
    return (
        <div className={`bigHead ${props.className}`}>
            <h1 className="bigHead__1">{props.head1}</h1>
            <h1 className="bigHead__2">{props.head2}</h1>
        </div>
    )
} 

export default BigHead