import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log("Datos recibidos:", req.body);
  if (req.method === 'POST') {
    const { subject, content, recipient, pdfBase64, pdfName } = req.body;

    try {
      // Configura el transporte SMTP
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // Usar true para el puerto 465
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      // Configura las opciones del correo
      const mailOptions = {
        from: `${process.env.GMAIL_USER}`,
        to: recipient,
        subject,
        text: content,
        attachments: [
          {
            filename: pdfName,
            content: pdfBase64,
            encoding: 'base64',
          },
        ],
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Correo enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar correo:', error);
      res.status(500).json({ error: 'Error al enviar correo' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
