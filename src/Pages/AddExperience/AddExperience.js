import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from './AddExperience.module.css'
import './AddExperience.css'

const AddExperience = () => {
    const validate = Yup.object().shape({
        title: Yup.string()
            .required("This Field is Required!"),
        employmentType: Yup.string()
            .required("This Field is Required!"),
        companyName: Yup.string()
            .required("This Field is Required!"),
        location: Yup.string()
            .required("This Field is Required!"),
        startDate: Yup.date()
            .required("This Field is Required!"),
        endDate: Yup.date()
            .min(Yup.ref('startDate'), "Give correct end date")
            .required("This Field is Required!"),
        description: Yup.string(),
    })

    return (
        < div style={{ background: " #F9F8F8", paddingTop: "14px" }}>
            <div className={styles.educationContainer}>
                <div className={styles.heading}>Add Experience</div>
                <div className={styles.content}>
                    <Formik initialValues={{
                        title: '',
                        employmentType: '',
                        companyName: '',
                        startDate: '',
                        endDate: '',
                        location: '',
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
                                        <p className={styles.label} >Title</p>
                                        <Field name="title" type="text">
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Eg. UI Designer" />
                                            }
                                        </Field>
                                        {errors.title && touched.title ? (
                                            <div className={styles.error}>{errors.title}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <p className={styles.label} >Employment type</p>

                                        <Field name="employmentType" type="text" >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Eg. Internship" />
                                            }
                                        </Field>
                                        {errors.employmentType && touched.employmentType ? (
                                            <div className={styles.error}>{errors.employmentType}</div>
                                        ) : null}

                                    </div>
                                    <div>
                                        <p className={styles.label} >Company Name</p>

                                        <Field name="companyName" type="text" >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Eg. Photoshooto" />
                                            }
                                        </Field>
                                        {errors.companyName && touched.companyName ? (
                                            <div className={styles.error}>{errors.companyName}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <p className={styles.label} >Location</p>

                                        <Field name="location" type="text" >
                                            {({
                                                field,
                                                meta: { touched, error }
                                            }) => <input className={touched && error ? "incorrect" : "correct"} {...field} placeholder="Eg. Tamilnadu" />
                                            }
                                        </Field>
                                        {errors.location && touched.location ? (
                                            <div className={styles.error}>{errors.location}</div>
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

export default AddExperience;
