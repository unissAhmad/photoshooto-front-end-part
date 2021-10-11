import React from 'react'
import './successfulReset.css';
import logo from './logo.png';
import photo from './Group (1).png';
import check from './Group 930.png';

function SuccessfulPasswordReset() {
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <img src={logo} id="logo" alt="" />
                    <div>
                        <span id="name">Photoshooto</span>
                        <span id="line">"Your Memories, Our Promise"</span>
                    </div>
                </div>
                <div className="content">
                    <img src={photo} id="photo" alt="" />
                    <div className="card">
                        <img src={check} id="check" alt="" />
                        <div>
                            <h1>Password Reset Successful</h1>
                        </div>
                        <div>
                            <p>Your password has been reset successfully.</p>
                            <p>Now you can login to your account.</p>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessfulPasswordReset
