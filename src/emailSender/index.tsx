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
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: process.env.MAIL_ADDRESS,
            pass: process.env.MAIL_PASSWORD,
        },
        logger: true
    })

    const info = await transporter.sendMail({
        from: process.env.MAIL_ADDRESS,
        to: process.env.ADMIN_MAIL,
        subject: "Overdue Loan Notification",
        text: "User " + { name } + "has an overdue loan"
    });

    console.log("Message sent: %s", info.response);
}