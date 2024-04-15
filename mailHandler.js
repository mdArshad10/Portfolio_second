import { Resend } from "resend";
import swal from "sweetalert";


const resend = new Resend(import.meta.env.VITE_MAIL_ID);

export const sendEmail= async ({email,name, message}) =>{

    console.log(import.meta.env.VITE_MAIL_ID);
    const {data, error} = await resend.emails.send({
      from: email,
      to: "arshadwebdeveloper10@gmail.com",
      subject: "Message from website",
      html: `<p> i am <strong>${name}</strong> and the message is ==> ${message}</p>`,
    });
    if(error){
        swal(`${error}`, `${error.message}`, "error");
    }

    if(data){
        swal(`${data}`, `${data.message}`, "success");
    }
}
