"use client"
import { sendContactForm } from "@/lib/api";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLoading } from "react-icons/ai";

export default function Contact() {
    const sendWhatsApp = () => {
        const number = '0895421010192';
        const message = 'Hello Roganda Dimas Ariza.'
        window.open('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message);
    }


    const [values, setValues] = useState({
        senderName : "sender",
        senderEmail : "sender@gmail.com",
        subject : "New Email",
        text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, dignissimos quis blanditiis rerum nemo quos quae? Impedit aliquid sapiente, quod ducimus, animi dolorem consequatur eius, pariatur maiores consequuntur eos quasi!',
    })

    const handleSubmit = async () => {
        await sendContactForm(values)
    }

    return (
        <div className="home-container">
            <h1 className="home-title">Contact</h1>
            <div className="responsive-grid justify-items-center">
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
                            <button className="btn bg-red-400" type="button" onClick={handleSubmit}>
                                {/* <AiOutlineLoading className="animate-spin h-5 w-5 mr-3" /> */}
                                Email Me
                            </button>
                            </div>
                        </div>
                    </div>

                </div>

                <form className="w-full max-w-xs">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name.</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Email.</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Type here"></textarea>
                        <button className="btn bg-green-300 my-6" onClick={handleSubmit} >Send Email</button>
                    </div>
                </form>
            </div>
        </div>
    )
}