const nodemailer = require('nodemailer');





let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:"osmanlilian16@gmail.com",
        pass:"habdbansvdwrebtt"
    }
})

let details = {
    from: "osmanlilian16@gmail.com",
    to: "abiraams2001@gmail.com",
    subject: "idiot",
    text: "mr abi, youve been kick out from group 23. "
}
mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log("email has sent!!")
    }
})

