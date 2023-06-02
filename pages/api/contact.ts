// import { mailOptions, transporter } from "../../config/nodemailer";

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const myemail = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: myemail,
        pass,
    },
});

  const { name, email, message } = req.body;
  const mailData = {
    from: myemail,
    to: myemail,
    subject: `Message from ${name}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>Hi Layla,</div><h3>${message}</h3><p>Sent from: ${email}</p>`,
};

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return res.status(500).json({ error:message || 'Something went wrong' });
      } else {
        resolve(info.accepted);
        res.status(200).json({message: 'Message sent!'});
    }
  });
});

  return;
}
