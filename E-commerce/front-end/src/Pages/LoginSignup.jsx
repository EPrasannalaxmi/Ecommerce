import React from "react";
import './css/LoginSignup.css'
 
const LoginSignup = ()=>{
return(
    <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>
                Sign Up
            </h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Enter the password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already have an account? <span style={{ background: 'white', color:'blue'}}> Login here</span></p>
            <div className="loginsignup-agree">
               <input type="checkbox" name=''  id=""/>
            <p style={{ background: 'white'}}>By continuing, I agree to the terms and privacy policies.</p>
            
            </div>
        </div>
    </div>
)
}

export default LoginSignup