import Linkedin from "@/components/svg/linkedin";
import Behance from "@/components/svg/behance";
import styles from "./contact.module.scss";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/carlosmocilnik/",
    icon: <Linkedin />,
  },
  {
    href: "https://www.behance.net/mocilnikux#",
    icon: <Behance />,
  },
];

const Contact = () => {
  return (
    <section className={styles.sectionContact}>
      <div className={styles.contentContact}>
        <p className={styles.title}>Contacto</p>
        <ul className={styles.listSocial}>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
