import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import "./contact.scss"
function Contact() {
    const [first, setfirst] = useState([])
    return (
        <div className='task'>
            <Formik initialValues={{
                name: "",
                surname: "",
                email: "",
                number: "",
                about: "",
            }}
                onSubmit={(values) => {
                    console.log(values.surname);
                    setfirst((Deyer) => [...Deyer, values])
                }}>
                {
                    ({ value }) => (
                        <Form className='inps'>
                            <Field name="name" placeholder='Name' className="inp" />
                            <Field name="surname" placeholder='surname' className="inp" />
                            <Field name="email" type="email" placeholder='email' className="inp" />
                            <Field name="number" type="number" placeholder='number' className="inp" />
                            <Field name="about" placeholder='about' className="inp" />
                            <button type='submit'>Send</button>
                        </Form>
                    )
                }
            </Formik>
            <div className='text'>
                <h1>To do list:</h1>
            </div>
            {
                <div className='list'>
                    {
                        first.map((endValue, index) => {
                            return (
                                <ul key={index} className="list-ul">
                                    <li className='list-li'>Name:"{endValue.name}"</li>
                                    <li className='list-li'>Surname:"{endValue.surname}"</li>
                                    <li className='list-li'>email:"{endValue.email}"</li>
                                    <li className='list-li'>number:"{endValue.number}"</li>
                                    <li className='list-li'>About:"{endValue.about}"</li>
                                </ul>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
export default Contact