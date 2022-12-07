import nodemailer from 'nodemailer'

export async function mailSender() {
    var transporter = nodemailer.createTransport({
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

    let user = "test"                     // This is where I want to pass the user name from the Loan.tsx file

    const info = await transporter.sendMail({
        from: process.env.MAIL_ADDRESS,
        to: process.env.ADMIN_MAIL,
        subject: "Overdue Loan Notification",
        text: "User " + {user} + "has an overdue loan"
    });
}