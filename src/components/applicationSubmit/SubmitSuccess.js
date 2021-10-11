import React from 'react'
import './SubmitSuccess.css';
import circleTick from '../applicationSubmitImages/circleTick.png'
import submitImg1 from '../applicationSubmitImages/submitImg1.png'

export default function SubmitSuccess() {
    return (
        <div>
            <div className="submitBody">
                <div className="submitItem1">
                   <img src={submitImg1} className="circleTickImg" alt="welcome" />
                    <p className="thankyou">Thank you</p>
                    <p className="submitDescription p1">Your Application was successfully submitted.</p>
                </div>
                <div className="submitItem2">
                   
                    <img src={circleTick} className="circleTickImg" alt="success" />
                    <p className="thankyou">Application Submitted!</p>
                    <div className="desc">
                        <p className="smallTitle">Successfully submitted on 13/09/2021</p>
                        <p className="submitDescription">Your Application number is PS09878</p>
                    </div>
                        <p className="smallText">You can check the status of this application by visiting “Application” in the main menu bar.</p>
                </div>
            </div>
        </div>
    )
}
