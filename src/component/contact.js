"use client"
import { sendContactForm } from "@/lib/api";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLoading } from "react-icons/ai";

const initValues = {
    senderName : "",
    senderEmail : "",
    subject : "",
    text : '',
}

export default function Contact() {
    const sendWhatsApp = () => {
        const number = '0895421010192';
        const message = 'Hello Roganda Dimas Ariza.'
        window.open('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message);
    }

    const [values, setValues] = useState(initValues);
    const [emailResponse, setEmailResponse] = useState({emptyEmail : false, formEmail : false});

    const handleChange = ({ target }) => 
        setValues(prevState => ({
          ...prevState,
          [target.name] : target.value,
        }));

    const handleSubmit = async (e) => {
        e.preventDefault()
        setEmailResponse(prev => ({...prev, formEmail : true}));
        const response = await sendContactForm(values);
        if(response.ok) {
            setValues(initValues)
            setEmailResponse(prev => ({...prev, formEmail : false}));
        }
    }

    const hanldeEmptyEmail = async e => {
        const emptyValues = {
            ...initValues, 
            senderName : "Anonymous Name",
            subject : "Send Empty Email"
        }
        setEmailResponse(prev => ({...prev, emptyEmail : true}))
        const response = await sendContactForm(emptyValues)
        if(response.ok) setEmailResponse(prev => ({...prev, emptyEmail : false}))
    }

    return (
        <div className="home-container">
            <h1 className="home-title">Contact</h1>
            <div className="responsive-grid justify-items-center" data-aos="fade-up" data-aos-duration="800">
                <div className="gap-10 flex flex-col items-center">

                    <div className="card w-50 glass shadow-xl">
                    <figure className="text-green-500 text-6xl p-4"><BsWhatsapp /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Whatsapp</h2>
                            <p>My Contact Number +62895421010192</p>
                            <div className="card-actions justify-end">
                            <button className="btn bg-green-500" onClick={sendWhatsApp}>Whatsapp me</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-50 glass shadow-xl">
                    <figure className="text-red-400 text-6xl p-4"><HiOutlineMail /></figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Email</h2>
                            <p>My Email Address dimas.ariza20@gmail.com</p>
                            <div className="card-actions justify-end">
                            <button className="btn bg-red-400" type="button" onClick={hanldeEmptyEmail}>
                                {
                                    emailResponse.emptyEmail
                                    ? <AiOutlineLoading className="animate-spin h-5 w-5 mr-3" />
                                    : ""
                                }
                                Email Me
                            </button>
                            </div>
                        </div>
                    </div>

                </div>

                <form className="w-full max-w-xs">
                    <div className="form-control"> 
                        <label className="label" htmlFor="i_fullname">Full Name</label>
                        <input 
                        id="i_fullname"
                        type="text" 
                        placeholder="Type here" 
                        className="input-style" 
                        name="senderName" 
                        value={values.senderName}
                        onChange={handleChange}
                        />
                        <label className="label" htmlFor="i_email">Email</label>
                        <input 
                        id="i_email"
                        type="text" 
                        placeholder="Type here" 
                        className="input-style" 
                        name="senderEmail" 
                        value={values.senderEmail}
                        onChange={handleChange}
                        />
                        <label className="label" htmlFor="i_subject">Subject</label>
                        <input 
                        id="i_subject"
                        type="text" 
                        placeholder="Type here" 
                        className="input-style" 
                        name="subject" 
                        value={values.subject}
                        onChange={handleChange}
                        />
                        <label className="label" htmlFor="i_text">Message</label>
                        <textarea 
                        id="i_text"
                        className="textarea textarea-bordered h-48 focus:border-sky-500 focus:border-2 text-black" 
                        name="text" placeholder="Type here" 
                        value={values.text}
                        onChange={handleChange}
                        ></textarea>
                        <button className="btn bg-green-300 my-6" onClick={handleSubmit} >
                                {
                                    emailResponse.formEmail
                                    ? <AiOutlineLoading className="animate-spin h-5 w-5 mr-3" />
                                    : ""
                                }
                            Send Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}