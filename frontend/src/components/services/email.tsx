import emailjs from "@emailjs/browser";

export default async function Emailjs(name, email, phone, subject, message) {
    const dateTime = new Date().toISOString();

    const templateParams = {
        name,
        email,
        phone,
        subject,
        message,
        dateTime,
    };


    const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
    );

    return result;

}