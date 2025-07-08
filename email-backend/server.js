/* eslint-disable no-undef */
import express, { json } from "express";
import cors from "cors";
import multer from "multer";
import { createTransport } from "nodemailer";
import { unlinkSync } from "fs";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for your frontend
app.use(cors({ origin: "http://localhost:5173" }));

// Middleware to parse JSON
app.use(json());

// Set up multer for file uploads. Files will be stored temporarily in the "uploads" folder.
const upload = multer({ dest: "uploads/" });

// Log SMTP Host for debugging
console.log("SMTP Host:", process.env.SMTP_HOST);

// Create the Nodemailer transporter using Gmail SMTP credentials
const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT), // Convert port to number
  secure: true, // true for 465 (SSL)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Gmail App Password
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Error with SMTP configuration:", error);
  } else {
    console.log("SMTP server is ready to send emails.");
  }
});

// Endpoint to send email with an optional attachment (e.g., a resume)
app.post("/send-email", upload.single("cv"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const file = req.file;

    // Construct the email options
    let mailOptions = {
      from: process.env.SMTP_USER, // Sender address
      to: "asianworldcargo@gmail.com", // Change to the recipient address
      subject: `New Job Application from ${name}`,
      text: `You have received a new job application.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    // Attach file if uploaded
    if (file) {
      mailOptions.attachments = [
        {
          filename: file.originalname,
          path: file.path,
        },
      ];
    }

    // Send the email
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result);

    // Optionally, delete the file after sending the email
    if (file) {
      unlinkSync(file.path);
    }

    res.json({ success: true, message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
