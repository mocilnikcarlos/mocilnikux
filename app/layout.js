export const metadata = {
  title: "mocilnik.ux",
  description:
    "3 Años como Diseñador UX/UI apasionado por transformar ideas en soluciones que conectan con las necesidades reales del usuario. Me especializo en el diseño centrado en el usuario (DCU). Mi objetivo es siempre aportar valor y hacer que cada interacción sea memorable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
