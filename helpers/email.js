const nodemailer = require('nodemailer')

exports.sendMail = (reciever,subject,text,html) => {
    const transporter = nodemailer.createTransport({
        service : "gmail",
        port : 587,
        secure : false ,
        auth : {
            user : "ahmed.ism1990.ai@gmail.com",
            pass : "nqmepqlrwasucktt",
        }
    })
    const info = transporter.sendMail({
        from : '"NODE mailer" <foo@exmaple.com>',
        to : reciever,
        subject,
        text,
        html
    })
    console.log("message sent",info.messageId)
}