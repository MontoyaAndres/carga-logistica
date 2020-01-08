import sendGrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

import { IEmailValues } from "../../types/IEmailValues";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, telephone, description }: IEmailValues = req.body;

  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

  const content = {
    to: "rmcarga.logistica@gmail.com", // carga logistica email
    from: email,
    subject: `${name} requiere de un servicio.`,
    html: `
Nombre: ${name}<br>
Email: ${email}<br>
Teléfono: ${telephone}<br>

<p>${description}</p>
    `
  };

  try {
    await sendGrid.send(content);
    res.status(200).send({ response: true });
  } catch (error) {
    console.error(error);
    res.status(400).send({ response: false });
  }
};
