const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    console.log('Received form submission:', req.body);

    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };


    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }


});

app.get('/', (req, res) => {
    res.send('Forerunner Backend Server is running');
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });




