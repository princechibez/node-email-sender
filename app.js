const express = require("express");
require("dotenv/config");
const nodemailer = require("nodemailer");

const envFile = process.env;
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: envFile.MAIL_USER,
        pass: envFile.MAIL_PASSWORD,
        clientId: envFile.OAUTH_CLIENTID,
        clientSecret: envFile.OAUTH_CLIENT_SECRET,
        refreshToken: envFile.OAUTH_REFRESH_TOKEN
    }
})

const app = express();

app.get("/emailer", (req, res, next) => {
    transporter.sendMail({
        from: "node@node.com",
        to: "nwobiprince8@gmail.com",
        subject: "Node emailing app",
        text: "I am super excited that tis worked out, it really feels so good... honestly..."
    }, (err, data) => {
        if (err) {
            console.log(err)
            return res.json("There was an error sending the mail");
        }
        res.json("Congratulations, the email was sennt successfully...")
    })
})

app.listen(process.env.PORT || 4000, () => console.log(`Runninng on port ${process.env.PORT}`));