import React from 'react';
import styles from './Settings.module.css';
import Toggle from './ToggleSwitch';

function settings() {
    return (
        <div>
            <div id="settings" className={styles.card}>
                <h1 className={styles.heading1}>Settings</h1>
                <div className={styles.settings}>
                    <div className={styles.blogs}>
                        <div>
                            <div className={styles.heading}>Push Notifications</div>
                            {/* <p>Notifications of newsletter and and other important notifications will be turned off </p> */}
                        </div>
                        <Toggle name="normal" />                        
                    </div>
                    <div className={styles.cookies}>
                        <div className={styles.heading}>Cookie Settings</div>
                        <div>
                            <label htmlFor="accept">Accept all cookies</label>
                            <input type="checkbox" id="accept"></input>
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.others}>
                        <div>
                            <h4>Strictly Necessary</h4>
                            <p className={styles.sub}>These cookies are necessary for the website and can’t be deactivated.</p>
                        </div>
                        <div id="locked" className={styles.locked}></div>
                    </div>
                    <div className={styles.others}>
                        <div>
                            <h4>Management and Analytics</h4>
                            <p className={styles.sub}>These cookies can be set by our advertising partners through our website.</p>
                        </div>
                        <Toggle name="normal" />
                    </div>
                    <div className={styles.others}>
                        <div>
                            <h4 id="third" className={styles.third}>Preferences</h4>
                            <p className={styles.sub}>To individualize your content, we use tools that personalize your web experience.</p>
                        </div>
                        <Toggle name="normal" />
                    </div>
                    <div className={styles.pass}>
                        <div className={styles.heading}>Change Password</div>
                        <div>
                            <button>Change</button>
                        </div>
                    </div>
                    <div className={styles.save}>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default settings