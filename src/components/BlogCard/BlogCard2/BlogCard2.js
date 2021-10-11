import React from 'react'
import { Link } from "react-router-dom";
import styles from "./BlogCard2.module.css"
const BlogCard2 = ({ blogData: { id,img, status,title, info, link,review } }) => {
    return (
        <div>
            <div class={styles.sec}>
                <img src={img} alt="blog-img" />
                <div class={styles.con}>
                    <h1>{title}</h1>
                    <li className={styles.type}>{status.type}</li>
                    <p>{info}</p>
                    <Link to={link} className={styles.link}>Read More</Link>
                    <div className={styles.status}>
                    <li className={styles.date}>{status.date}</li>
                    <li className={styles.readtime}>{status.readtime}</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard2;
