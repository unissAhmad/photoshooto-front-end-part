import React from 'react'
import styles from './Document.module.css'
import { Link } from 'react-router-dom'

// import React from 'react';

import { useState } from 'react';
import File from '../../../assets/images/file_img.png';


function Document() {
    const [files, setfiles] = useState(
        [
            {
                id: 1,
                fileName: "Resume.pdf",
            },

            {
                id: 2,
                fileName: "Aadharcard.pdf",

            },
            {
                id: 3,
                fileName: "Photograph.pdf",
            },
            {
                id: 4,
                fileName: "LastDegree.pdf",
            },

            {
                id: 5,
                fileName: "LastDegree.pdf",
            },
        ])


    return (
        <div id="document" className={styles.docContainer}>
            <h1 className={styles.heading1}>Documents</h1>
            <div className={styles.container}>
                {/* <div className={styles.main}>
                <h2 className={styles.heading2}>My Documents</h2>
                <div className={styles.addDocument}>
                    <input type="file" id="file" />
                    <label className={styles.fileLabel} for="file" name="Add Document" />
                </div>
            </div> */}
                <div className={styles.main}>
                    <div className={styles.section}>
                        <h2 className={styles.heading2}>My Documents</h2>
                        <div className={styles.addDocument}>
                            <input type="file" id="file" />
                            <label className={styles.fileLabel} for="file">Add Document</label>
                        </div>
                    </div>
                    {files.map((file) => (
                        <div className={styles.filesUpload}>
                            <img className={styles.file} src={File} alt="" />
                            <span key={file.id} className={styles.fileName} >{file.fileName}</span>
                            <span className={styles.editOption}>
                                <a href="">Edit</a>
                                <span>|</span>
                                <a href="">Download</a>
                            </span>
                            {/* <div className={styles.line}></div> */}
                        </div>


                    ))}
                </div>




                <div className={styles.last}>
                <input type="checkbox" name="" id="policy" />
                <label class={styles.policyLabel} for="policy">I hereby declare that all the information given by me in this
                    application is true
                    and correct to the best of my knowledge and belief.</label>
                </div>

            </div>
        </div>
    )
}
export default Document;
// const Document = () => {
//     return (
//         <div id="document" className={styles.docContainer}>
//             <h1 className={styles.heading1}>Documents</h1>
//             <div className={styles.container}>
//                 <div className={styles.section}>
//                     <div className={styles.content}>
//                         <h1 className={styles.heading2}>My Documents</h1>
//                     </div>
//                     <div className={styles.edit}><Link to="/"><button className={styles.btn}><input type="file" id="file"/>Add Document
//                     </button></Link></div>

//                 </div>
//             </div>
//         </div>
//     )
// }

