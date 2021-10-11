import React from 'react'
import './ForgotPass.css';
import padlock from './padlock.png';
import vector from './vector.png';

function ForgotPassword() {
    return (
        <div>
            <div className="maincard">
               
                <div className="vector side">
                    <img src={vector} alt="camera" />
                </div>
                
                <div className="innercard">
                    <img className="padlock" src={padlock} alt="padlock" />
                    <h4 className="forgotpass">Forgot Password</h4>
                    <p className="info">
                        Enter your email address in the form below and we will send you further instructions on how to reset your password.              
                    </p>
                    <input className="email" type="email" value="" placeholder="Email address" />
                    

                        <button className="button">Reset Password</button>
                    
                    
                </div>
            </div>
        </div>
        
    );
}

export default ForgotPassword