import React from 'react'
import styles from './checkEmail.module.css';
import logo from './logo.png';
import photo from './Group (1).png';
import check from './Group 930.png';

function CheckYourEmail() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} id={styles.logo} alt="" />
                    <div>
                        <span id={styles.name}>Photoshooto</span>
                        <span id={styles.line}>"Your Memories, Our Promise"</span>
                    </div>
                </div>
                <div className={styles.content}>
                    <img src={photo} id={styles.photo} alt="" />
                    <div className={styles.card}>
                        <img src={check} id={styles.check} alt="" />
                        <div>
                            <h1>Check your email</h1>
                        </div>
                        <div>
                            <p>Check your email and follow the instructions
                                to reset your password.</p>
                            {/* <p>You can now log in.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckYourEmail
