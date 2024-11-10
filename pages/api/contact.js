import nodemailer from 'nodemailer';

// API route to handle contact form submissions
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Destructures fields from request body
    const { username, phoneNumber, email, subject, message } = req.body;

    // Configures SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or any other email provider
      auth: {
        user: process.env.EMAIL_USER, // Email user from environment variables
        pass: process.env.EMAIL_PASS, // Email password from environment variables
      },
    });

    // Sets up email data
    const mailOptions = {
      from: email, // Sender address
      to: process.env.EMAIL_USER, // Receiver address (my email)
      subject: `New message from ${username}: ${subject}`, // Subject line
      text: `Message: ${message}\nPhone Number: ${phoneNumber}\nEmail: ${email}`, // Plain text body
    };

    try {
      // Sends mail with defined transport object
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true }); // Success message response
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send message' }); // Error message response
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' }); // Handles non-POST requests
  }
}