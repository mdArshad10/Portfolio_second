export const sendMail = async ({ name, email, message }) => {
  try {

    const data = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,

      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        to: "arshadwebdeveloper10@gmail.com",
        from: email,
        message,
      }
    );
    console.log(data);
  } catch (error) {
    console.log("this some error =>", error);
  }
};
