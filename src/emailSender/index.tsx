import nodemailer from 'nodemailer'

interface User {
    name: string,
}

export async function mailSender({ name }: User) {
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",     // hostname
        requireTLS: true,
        secure: false,                  // TLS requires secureConnection to be false
        port: 587,                      // port for secure SMTP
        auth: {
            user: `${process.env.REACT_APP_MAIL_ADDRESS}`,
            pass: `${process.env.REACT_APP_MAIL_PASSWORD}`,
        },
        logger: true
    })

    const info = await transporter.sendMail({
            from: `"Sender Name" <${process.env.REACT_APP_MAIL_ADRESS}>`,
            to: `${process.env.REACT_APP_ADMIN_MAIL}`,
            subject: "Hello from node",
            text: "Hello world?",
            html: "<strong>Hello world?</strong>",
            headers: { 'x-myheader': 'test header' }
          });

    console.log("Message sent: %s", info.response);
}