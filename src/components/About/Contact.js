import { useState } from "react"
import { FiSend } from "react-icons/fi"
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import EMAILJS_KEY from '../../EmailJS'


const Contact = () => {
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(EMAILJS_KEY.SERVICE_ID, EMAILJS_KEY.TEMPLATE_ID, form.current, EMAILJS_KEY.USER_ID)
            .then((result) => {
                console.log(result.text)
                setError(false)
                setSuccess('Email has been sent')
            }, (error) => {
                console.log(error.text)
                setError(error.text)
                setSuccess(false)
            })
    }

    return (
        <div id="contact" className="contact w-100 flex-column flex-center">
            <div className="container w-50">
                <h1 className="title">CONTACT</h1>
                <form ref={form} onSubmit={sendEmail} className="default-box-container form flex-column flex-center">
                    {success && <p className="message-success">{success}</p>}
                    {error && <p className="message-error">{error}</p>}
                    <div className="w-80 text-center">
                        <div className="flex-column flex-a-start">
                            <label htmlFor="formName">Name</label>
                            <input type="text" className="default-form " id="formName" name="name" placeholder="name"
                            />
                        </div>
                        <div className="flex-column flex-a-start">
                            <label htmlFor="formMail">Email address</label>
                            <input type="email" className="default-form w-80" id="formMail" name="email"
                                placeholder="user@mail.com" />
                        </div>
                        <div className="flex-column flex-a-start">
                            <label htmlFor="formMessage">Message</label>
                            <textarea className="default-form w-100" name="message" id="formMessage" rows="3"
                                placeholder="Message"></textarea>
                        </div>
                        <input type="hidden" id="app_name" name="app_name" value="react-crud-website" />
                        <button type="submit" className="button-react-icon button-block"><FiSend className="react-icon" /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact