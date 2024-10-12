import Behance from "../svg/behance";
import Linkedin from "../svg/linkedin";
import style from "./footer.module.scss";

const Footer = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/carlosmocilnik/",
      component: <Linkedin />,
    },
    {
      href: "https://www.behance.net/mocilnikux",
      component: <Behance />,
    },
  ];

  return (
    <footer className={style.footer}>
      {links.map(({ href, component }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          {component}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
