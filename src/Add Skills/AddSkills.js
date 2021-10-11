import React, { useState } from 'react'
import styles from './AddSkills.module.css'
import './AddSkills.css'
import { Link } from 'react-router-dom'

const AddSkills = () => {
    // const skills = [{ id: 1, title: "Marketing" },
    // { id: 2, title: "Project Management" },
    // { id: 3, title: "Analytical skills" },
    // { id: 4, title: "Team Management" },
    // { id: 5, title: "Strategy" },
    // { id: 6, title: "Customer Service" },
    // { id: 7, title: "Leadership" },
    // { id: 8, title: "Sales" },
    // { id: 9, title: "Engineering" },
    // { id: 10, title: "Communication Skills" }]

    const [skills, setSkills] = useState([
        { id: 1, title: "Marketing" },
        { id: 2, title: "Project Management" },
        { id: 3, title: "Analytical skills" },
        { id: 4, title: "Team Management" },
        { id: 5, title: "Strategy" },
        { id: 6, title: "Customer Service" },
        { id: 7, title: "Leadership" },
        { id: 8, title: "Sales" },
        { id: 9, title: "Engineering" },
        { id: 10, title: "Communication Skills" }
    ])

    const handleClick = (id, e) => {
        if (e.target.classList.contains("skillselected")) {
            e.target.classList.remove("skillselected")
        } else {
            e.target.classList.add("skillselected")
        }
    }

    // const handleChange = (e) => {
    //     setSkills([...skills, {
    //         id: skills.length + 1,
    //         title: e.target.value
    //     }])
    //     console.log(skills)
    // }

    const addButton = () => {
        // e.target.createElement("button");
        const button = document.getElementById("addbtn")
        button.classList.remove("hidden")
    }

    const hideButton = () => {
        const button = document.getElementById("addbtn")
        button.classList.add("hidden")
    }

    const appendSkill = (e, skill) => {
        setSkills([...skills, {
            id: skills.length + 1,
            title: skill
        }])
        console.log(skills)
    }


    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Add Skills</h1>
                <input type="text" name="Skill" id="skills" placeholder="Skill (eg : UX designer)" />
                {(skills.length < 19) ?
                    <button className="addbtn" id="addbtn" onClick={(e) => appendSkill(e, document.getElementById("skills").value)}>ADD</button> :
                    null
                }
                {(19 - skills.length == 0) ? null : <div className={styles.addMore}>You can add {19 - skills.length} more skills</div>}

                <div className={styles.suggestedskills}>
                    <h3 className={styles.suggestedskillsheading}>Some suggested skills:</h3>
                    <div className={styles.skillsboxouter}>
                        {skills.map(skill =>
                            <div className="skillsbox" key={skill.id} onClick={(e) => handleClick(skill.id, e)}>
                                {skill.title}
                            </div>
                        )}
                    </div>
                    <div className={styles.buttons}>
                        <Link to='/dashboard'><button>Cancel</button></Link>
                        <Link to='/dashboard'><button>Save</button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddSkills
