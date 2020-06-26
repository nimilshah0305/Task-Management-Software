const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'nimil.s@ahduni.edu.in',
        subject : 'Thanks for joining in',
        text: `Welcome to the app,${name}`
    })

}

const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'nimil.s@ahduni.edu.in',
        subject : 'Sorry',
        text: `Come soon,${name}`
    })

}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
