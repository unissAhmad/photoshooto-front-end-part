import React from 'react';
import styles from './AppCard.module.css'


function AppCard (props) {
    
        return (
            
            <div className={styles.container1}>
            
                <div className={styles.internshipCard}>
                    <div className={styles.favicon}>
                        <img src={props.image} alt="approve"></img>
                    </div>
                    <div className={styles.step}>STEP - {props.step}</div>
                    
                    <div className={styles.info}>{props.info}</div>
                    
                    
                </div>
            
                
            </div>
            
        )
}

export default AppCard