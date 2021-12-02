const nodemailer=require("nodemailer");
require("dotenv").config();
module.exports=new nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user:process.env.SMTP_USER,
      pass:process.env.SMTP_PASS,
    },
});