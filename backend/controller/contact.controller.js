const { client } = require("../model/client.model");
const nodemailer = require("nodemailer");

const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to database
    const newclient = await client.create({
      name,
      email,
      message,
    });

    // Email transporter setup (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL, // Your email
        pass: process.env.MY_EMAIL_PASS, // Your app password (NOT your gmail password)
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name} <${email}>"`, // Display user email in "From" field as name (visible)
      replyTo: email, // When you click reply, it replies to the user
      to: process.env.MY_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Response
    res
      .status(200)
      .json({ message: "Feedback sent and email delivered", newclient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  contact,
};
