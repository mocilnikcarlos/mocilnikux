import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, company, description, selectedOption } =
    await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const adminMailOptions = {
    from: `"Nuevo contacto desde el portafolio" <${email}>`,
    to: "mocilnik.web@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    text: `
      Nombre: ${name}
      Correo: ${email}
      Empresa o proyecto: ${company}
      Eligió el servicio de: ${selectedOption}
      Mensaje: ${description}
    `,
  };

  const userMailOptions = {
    from: `"Carlos de Mocilnik" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Confirmación de recepción de tu mensaje",
    text: `
      Hola ${name},

      Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto. Aquí están los detalles:

      Nombre: ${name}
      Empresa o proyecto: ${company}
      Servicio solicitado: ${selectedOption}
      Mensaje: ${description}

      ¡Gracias por ponerte en contacto con nosotros!

      Saludos,
      El equipo de Mocilnik
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);

    await transporter.sendMail(userMailOptions);

    return new Response(
      JSON.stringify({ message: "Correo enviado exitosamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(
      JSON.stringify({ error: "Error al enviar el correo" }),
      { status: 500 }
    );
  }
}
