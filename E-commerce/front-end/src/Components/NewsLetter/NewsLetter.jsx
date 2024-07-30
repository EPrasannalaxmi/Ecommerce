import React from "react";
import './NewsLetter.css'

const NewsLetter = () =>{
    return(
    <div className="newsletter">
     <h1 style={{background:"aquamarine"}}>
        Get Exclusive Offers On your Email
     </h1>
     <p style={{background:"aquamarine"}}>Subscribe to our newsletter and stay updated</p>
     <div>
        <input type="email" placeholder="Your Email id" style={{background:"white"}}/>
        <button>Subscribe</button>
     </div>
    </div>
    )
}

export default NewsLetter