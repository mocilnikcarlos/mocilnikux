import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, company, description, selectedOption } =
    await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Nuevo contacto desde el portafolio" <${email}>`,
    to: "mocilnik.web@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    text: `
      Nombre: ${name}
      Correo: ${email}
      Empresa: ${company}
      Eligió el servicio de: ${selectedOption}
      Mensaje: ${description}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
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
