import React from 'react'
import styles from './Application.module.css'

const Application = () => {
    return (
        <div id="application" className={styles.appContainer}>
            <h1 className={styles.heading1}>Your Application</h1>
            <div className={styles.content}></div>
        </div>
    )
}

export default Application
