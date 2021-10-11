import React from 'react'
import styles from './footer.module.css'
import logo from './logo.png'
import envelope from './Envelope-cuate 1.png'
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaRegCopyright } from 'react-icons/fa'

const footer = () => {
    return (
        <div>
            <div class={styles.footercontent}>
                <div class={styles.left}>
                    <div class={styles.logo}>
                        <img src={logo} alt="" />
                        <div>
                            <span id={styles.name}>Photoshooto</span>
                            <span id={styles.line}>"Your Memories, Our Promise"</span>
                        </div>
                    </div>
                    <div class={styles.connect}>Connect With Us</div>
                    <div class={styles.icons}>
                        <div className={styles.fab}>
                            <FaFacebookF />
                        </div>
                        <div className={styles.fab}>
                            <FaTwitter />
                        </div>
                        <div className={styles.fab}>
                            <FaPinterestP />
                        </div>
                        <div className={styles.fab}>
                            <FaInstagram />
                        </div>
                    </div >
                </div >
                <div class={styles.middle}>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Programs</a>
                    <a href="#">Blogs</a>
                </div>
                <div className={styles.right}>
                    <div>
                        <span>
                            SUBSCRIBE TO OUR NEWSLETTER
                        </span>
                        <form>
                            <div className={styles.emailbtn}>
                                <input type="email" id={styles.email} placeholder="E-mail" />
                                <button className={styles.joinbtn}>JOIN</button>
                            </div>
                            <div>
                                <input type="checkbox" id={styles.tnc} />
                                <label for="tnc">Accept all Terms and Conditions</label>
                            </div>
                            <div>
                                <input type="checkbox" id={styles.pp} />
                                <label for="pp">Accept all Privacy and Policy</label>
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={envelope} alt="" />
                    </div>
                </div>
            </div >
            <div class={styles.copyright}>
                <FaRegCopyright className={styles.facopyright} />
                <span>Copyright Photoshooto Internship 2020-21</span>
            </div>
        </div >
    )
}

export default footer
