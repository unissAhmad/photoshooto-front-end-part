import React, { useState } from 'react'
import styles from './login.module.css';
import logo from './logo.png';
import photo from './Group (1).png';
import { Formik, Form, Field, ErrorMessage, getIn } from "formik";
import * as Yup from "yup";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css"

const LoginPage = () => {

    // Schema Validation
    const validate = Yup.object({
        email: Yup.string()
            .email("Invalid Email!")
            .required("Email is Required!"),
        password: Yup.string()
            .min(8, "Password Must Contain Atleast 8 characters!")
            .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d).*$/,
                "Must Contain Atleast 1 Digit and Special Character!")
            .required("Password is Required!"),
    })

    // Password Visibility Toggle
    const [visible, setVisibility] = useState(false);
    const InputType = visible ? "text" : "password";


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
                        <h2 className={styles.heading}>Login</h2>
                        <Formik initialValues={{
                            email: '',
                            password: '',
                        }}
                            validationSchema={validate}
                        >
                            {({ errors, touched }) => (
                                <Form noValidate>
                                    <div className={styles.loginform}>
                                        <div>
                                            {errors.email && touched.email ? (
                                                <div className={styles.error}>{errors.email}</div>
                                            ) : null}
                                            <Field name="email" type="email">
                                                {({
                                                    field,
                                                    meta: { touched, error }
                                                }) => <input className={touched && error ? "invalid" : "input"} {...field} placeholder="Email Address" />
                                                }
                                            </Field>
                                        </div>
                                        <div>
                                            {errors.password && touched.password ? (
                                                <div className={styles.error}>{errors.password}</div>
                                            ) : null}
                                            <Field name="password" >
                                                {({
                                                    field,
                                                    meta: { touched, error }
                                                }) => <input type={InputType} className={touched && error ? "invalid" : "input"} {...field} placeholder="Create Password" />
                                                }
                                            </Field>
                                            <span className={styles.passwordtoggle}>
                                                {visible ?
                                                    <FontAwesomeIcon icon={faEyeSlash} onClick={() => setVisibility(!visible)} /> :
                                                    <FontAwesomeIcon icon={faEye} onClick={() => setVisibility(!visible)} />}
                                            </span>
                                        </div>
                                        <div className={styles.newforgot}>
                                            <a href="" className={styles.newforgotlink}>New User?</a>
                                            <a href="" className={styles.newforgotlink}>Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div>
                                        <button className={styles.loginbtn} type="submit">Sign Up</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <div className={styles.partition}>
                            <div className={styles.borderleft}></div>
                            <div className={styles.or}>OR</div>
                            <div className={styles.borderright}></div>
                        </div>
                        <h2 className={styles.heading2}>Sign Up With</h2>
                        <div className={styles.social}>
                            <div className={styles.icons}>
                                <FontAwesomeIcon size="lg" icon={faGoogle} ></FontAwesomeIcon>
                            </div>
                            <div className={styles.icons}>
                                <FontAwesomeIcon size="lg" icon={faFacebookF} ></FontAwesomeIcon>
                            </div>
                            <div className={styles.icons}>
                                <FontAwesomeIcon size="lg" icon={faLinkedinIn} ></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginPage
