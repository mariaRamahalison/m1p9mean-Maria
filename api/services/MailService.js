"use strict";
const nodemailer = require("nodemailer");

    let config ={
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        // user: "m1p9mean.andy.ekaly@gmail.com",
        // pass: "m1p9mean.Andy"
        auth: {
            user: "m1p9mean.andy.ekaly@gmail.com",
            pass: "m1p9mean.Andy"
        },
        tls: {
            rejectUnauthorized: false
        }
    };

    function getTransporter() {
        return nodemailer.createTransport(config);
    }


async function sendMail(payload) {
    await getTransporter().sendMail({
        from: config.user,
        to: payload.to,
        subject: payload.subject,
        text: "text",
        html: payload.html,
    });

   
}

module.exports={
    sendMail
};
