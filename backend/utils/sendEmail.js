const nodemailer=require('nodemailer');
const { options } = require('../app');

const sendEmail=async options=>{
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "4da4eb92e23d6a",
          pass: "74c82022d7b979"
        }
      });

      const message={
        from:`${process.env.SMTP_FROM_NAME}<${process.env.SMTP_FROM_EMAIL}>`,
        to:options.email,
        subject:options.subject,
        text:options.message
      }
      await transporter.sendMail(message)
}
module.exports=sendEmail;