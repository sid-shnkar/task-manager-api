const postmark=require('postmark')
const client=new postmark.ServerClient(process.env.POSTMARK_API_KEY)


const  sendWelcomeEmail=(email, name) => {

    client.sendEmail(
        {
            From: "kipoti5369@tagbert.com",
            To: email,
            Subject: "Thanks for joining in!",
            HtmlBody: `Welcome to the app, ${name} . Let me know how you get along with the app.`
        }
    )

}

const sendDeleteEmail=(email, name) => {

    client.sendEmail(
        {
            From: "kipoti5369@tagbert.com",
            To: email,
            Subject: "Sorry to see you leaving",
            HtmlBody: `Goodbye , ${name} . Let me know the reason for deleting your account.`
        }
    )

}

module.exports={
    sendWelcomeEmail,
    sendDeleteEmail
}


