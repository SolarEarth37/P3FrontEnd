import nodemailer from 'nodemailer'

interface User {
    name: string,
}

export async function mailSender({ name }: User) {
    const transporter = nodemailer.createTransport({
        host: "gmail.com",     // hostname
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
        from: `${process.env.REACT_APP_MAIL_ADDRESS}`,
        to: `${process.env.REACT_APP_ADMIN_MAIL}`,
        subject: "Overdue Loan Notification",
        text: "User " + { name } + "has an overdue loan"
    });

    console.log("Message sent: %s", info.response);
}