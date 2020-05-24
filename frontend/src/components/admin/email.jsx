"use strict";
const nodemailer = require("nodemailer");

async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "gmail",
    port: 587,
    secure: false, 
    auth: {
      user: 'storemanager138@gmail.com', 
      pass: 'Admin@123', 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <storemanager138@gmail.com>', 
    to: "randu612@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

main().catch(console.error);
