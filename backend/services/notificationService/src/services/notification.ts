import nodemailer from 'nodemailer'

const mailerConfig = {
    nodemailerEmail: process.env.NODEMAILER_EMAIL,
    nodemailerPassword: process.env.NODEMAILER_PASSWORD
}
const frontendUrl=process.env.FRONTEND_URL
export default (emails: string[], postId: string) => {

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: mailerConfig.nodemailerEmail,
            pass: mailerConfig.nodemailerPassword,
        }
    })
    const mailOptions = {
        from: mailerConfig.nodemailerEmail,
        to: emails,
        subject: "Check Out Our New Blog Post!",
        html: generateText(postId),
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

const generateText = (postId: string): string => {
    let link=frontendUrl+'/post/'+postId
    let msg = `
<!DOCTYPE html>
<html>
<head>
    <title>New Blog Post</title>
</head>
<body>
    <p>Hi ,</p>
    <p>We have a new blog post up on our website!</p>
    <p>👉 <a href=${link}>Read it here</a></p>
    <p>Happy reading!</p>
    <p>Best,Blog Spot</p>
</body>
</html>
`;

    return msg

}