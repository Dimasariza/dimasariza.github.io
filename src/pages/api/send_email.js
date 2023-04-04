import { mailOptions, transporter } from "@/config/email_config";

const handler = async (req, res) => {
    if(req.method === "POST") {
        const data = req.body;
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject : data.subject,
                html : 
                `<div>
                    <h1 style="color: green;" >New Email</h1>
                    <span> <strong> ${data.senderEmail} </strong> send you an Email </span> 
                    <br> <br>
                    <span>Hello my name is <strong>${data.senderName}</strong> </span>
                    <p> ${data.text} </p>
                </div>`
            })
            return res.status(200).json({ message : "Email has been send" })
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message : err.message });
        }
    }
}

export default handler;