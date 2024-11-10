import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, phoneNumber, email, subject, message } = req.body;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or any other email provider
      auth: {
        user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${username}: ${subject}`,
      text: `Message: ${message}\nPhone Number: ${phoneNumber}\nEmail: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
