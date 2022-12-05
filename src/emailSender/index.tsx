export default function fakenews() {

}

/*import nodemailer from "nodemailer"

var transporter = nodemailer.createTransport({
    host: "smtp.office365.com",     // hostname
    secureConnection: false,        // TLS requires secureConnection to be false
    port: 587,                      // port for secure SMTP
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD
    }
})

let details = {
    from: process.env.MAIL_ADDRESS,
    to: process.env.ADMIN_MAIL,
    subject: "Overdue Loan Notification",
    text: "User " + "has an overdue loan"
}
transporter.sendMail(details, (err: any) => {
    if (err) {
        console.log("error", err)
    }
    else {
        console.log("email has sent!!")
    }
})

*/