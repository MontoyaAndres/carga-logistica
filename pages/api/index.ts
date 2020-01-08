import sendGrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

import { IEmailValues } from "../../types/IEmailValues";

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, telephone, description }: IEmailValues = req.body;

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

  await sendGrid.send(content);
  return res.status(200).json({ response: true });
};
