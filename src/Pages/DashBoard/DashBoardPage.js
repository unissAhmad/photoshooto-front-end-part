import React from 'react'
import DNavbar from '../../parts/DashBoard/DNavbar/DNavbar'
import DSidebar from '../../parts/DashBoard/DSidebar/DSidebar'
import MyAccount from '../../parts/DashBoard/MyAccount/MyAccount'
import AppStatus from '../../parts/DashBoard/ApplicationStatus/AppStatus'
import Application from '../../parts/DashBoard/Application/Application'
import Settings from '../../parts/DashBoard/Settings/Settings'
import Documents from '../../parts/DashBoard/Document/Document'

import styles from './DashBoardPage.module.css'
const DashBoardPage = () => {
    return (
        <div className={styles.dashBoard}>
            {/* <DNavbar /> */}
            <div className={styles.dashboardContainer}>
                <div><DSidebar /></div>
                <div>
                    <MyAccount />
                    <AppStatus />
                    <Application />
                    <Documents />
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default DashBoardPage;
