import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from './AddEducation.module.css'
import './AddEducation.css'

const AddEducation = () => {
    const validate = Yup.object().shape({
        school: Yup.string()
            .required("This Field is Required!"),
        degree: Yup.string()
            .required("This Field is Required!"),
        fieldOfStudy: Yup.string()
            .required("This Field is Required!"),
        startDate: Yup.date()
            .required("This Field is Required!"),
        endDate: Yup.date()
            .min(Yup.ref('startDate'), "Give correct end date")
            .required("This Field is Required!"),
        grade: Yup.number()
            .max(100, "Enter valid Percentage")
            .required("This Field is Required!"),
        activity: Yup.string(),
        description: Yup.string(),
    })

    return (
        < div style={{ background: " #F9F8F8", paddingTop: "14px" }}>
            <div className={styles.educationContainer}>
                <div className={styles.heading}>Add Education</div>
                <div className={styles.content}>
                    <Formik initialValues={{
                        school: '',
                        degree: '',
                        fieldOfStudy: '',
                        startDate: '',
                        endDate: '',
                        grade: '',
                        activity: '',
                        description: '',
                    }}
                        validationSchema={validate}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}

                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className={styles.form}>
                                    <div>
                                        <p className={styles.label} >School</p>
                                        <Field name="school" type="text">
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Eg. Oxford" />
                                            }
                                        </Field>
                                        {errors.school && touched.school ? (
                                            <div className={styles.error}>{errors.school}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <p className={styles.label} >Degree</p>

                                        <Field name="degree" type="text" >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Eg. B.Tech" />
                                            }
                                        </Field>
                                        {errors.degree && touched.degree ? (
                                            <div className={styles.error}>{errors.degree}</div>
                                        ) : null}

                                    </div>
                                    <div>
                                        <p className={styles.label} >Field of study</p>

                                        <Field name="fieldOfStudy" type="text" >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Eg. Computer Science" />
                                            }
                                        </Field>
                                        {errors.fieldOfStudy && touched.fieldOfStudy ? (
                                            <div className={styles.error}>{errors.fieldOfStudy}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <p className={styles.label} >Start date</p>

                                        <Field name="startDate"  >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input type="date" className={touched && error ? "incorrect" : "correct"} {...field} />
                                            }
                                        </Field>
                                        {errors.startDate && touched.startDate ? (
                                            <div className={styles.error}>{errors.startDate}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <p className={styles.label} >End date (or expected)</p>

                                        <Field name="endDate"  >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input type="date" className={touched && error ? "incorrect" : "correct"} {...field} />
                                            }
                                        </Field>
                                        {errors.endDate && touched.endDate ? (
                                            <div className={styles.error}>{errors.endDate}</div>
                                        ) : null}

                                    </div>
                                    <div>
                                        <p className={styles.label} >Grade</p>

                                        <Field name="grade" type="number"   >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Percentage" />
                                            }
                                        </Field>
                                        {errors.grade && touched.grade ? (
                                            <div className={styles.error}>{errors.grade}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <p className={styles.label} >Activities and societies</p>

                                        <Field name="activity" type="text"   >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Eg. Volleyball, Competitions etc" />
                                            }
                                        </Field>
                                        {errors.activity && touched.activity ? (
                                            <div className={styles.error}>{errors.activity}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <p className={styles.label} >Description</p>

                                        <Field name="description" type="text"   >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <textarea rows="2" className={touched && error ? "incorrect" : "correct"} {...field} />
                                            }
                                        </Field>
                                        {errors.description && touched.description ? (
                                            <div className={styles.error}>{errors.description}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className={styles.btn}>
                                    <button type="reset" >Cancel</button>
                                    <button type="submit">Save</button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    )
}

export default AddEducation
