# Welcome to this node-email-sender :wave:

## ``This is a basic email sender app, built with nodemailer, which is a node.js package that enables one to send emails from node servers to any client via any third party transporter of choice.``

-  ## The screenshot below is the proof of the email recieved from the node js server

![node email sender](https://user-images.githubusercontent.com/78439079/179323068-d1b807c6-2c82-42d6-a018-94eb3cb83ccd.png)

-   ## You can also check the code below to see the correspondence

```
app.get("/emailer", (req, res, next) => {
    transporter.sendMail({
        from: "node@node.com",
        to: "nwobiprince8@gmail.com, chibezprince@gmail.com",
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
```
## Thank you so much for checking this application out, hope you enjoyed it :smile::wave:
