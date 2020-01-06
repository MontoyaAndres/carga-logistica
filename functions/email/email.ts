import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import { Handler, Context, Callback, APIGatewayEvent } from "aws-lambda";

interface IBody {
  name: string;
  email: string;
  telephone: string;
  description: string;
}

const account = {
  email: "rmcarga.logistica@gmail.com",
  password: "C@rg@l0gistic"
};

var transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    auth: {
      user: account.email,
      pass: account.password
    }
  })
);

export const handler: Handler = (
  event: APIGatewayEvent,
  _: Context,
  callback: Callback
) => {
  const values: IBody = JSON.parse(event.body);

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

  return callback(null, {
    statusCode: 200,
    response: true
  });
};
