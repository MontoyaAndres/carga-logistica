const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const account = {
  email: "rmcarga.logistica@gmail.com",
  password: "C@rg@l0gistic"
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: account.email,
    pass: account.password
  }
});

app.post("/send-email", function(req, res) {
  const values = req.body;

  try {
    transporter.sendMail({
      from: values.email,
      to: account.email,
      subject: `${values.name} requiere de un servicio.`,
      html: `
  Nombre: ${values.name}<br>
  Email: ${values.email}<br>
  Teléfono: ${values.telephone}<br>
  <br>
  
  <p>${values.description}</p>
      `
    });
  } catch (err) {
    console.error(err);
    res.json({ response: false });
  }

  res.json({ response: true });
});

app.listen(process.env.PORT || 8080);
