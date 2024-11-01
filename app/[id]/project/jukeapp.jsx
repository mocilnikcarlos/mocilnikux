import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import JukeAppLogo from "@/components/svg/jukeapp";
import styles from "./globalpages.module.scss";
import ListFooter from "@/components/componentspages/listfooter";
import LinkWeb from "@/components/componentspages/linkweb";

const descriptions = ["JukeApp (NAVI)", "Rediseño UX/UI", "Figma"];

const details = {
  description: `JukeApp es un TMS logístico que gestiona paquetes de Mercado Libre y otros vendedores. También proporciona una app para que los repartidores realicen colectas y entregas.

  Rediseñé el proyecto debido a que el original presentaba incoherencia en los flujos y la UI.`,
};

const images = [
  { src: "/img jukeapp 1.png" },
  { src: "/img jukeapp 2.png" },
  { src: "/img jukeapp 3.png" },
  { src: "/img jukeapp 4.png" },
  { src: "/img jukeapp 5.png" },
  { src: "/img jukeapp 6.png" },
  { src: "/img jukeapp 7.png" },
  { src: "/img jukeapp 8.png" },
  { src: "/img jukeapp 9.png" },
  { src: "/img jukeapp 10.png" },
  { src: "/img jukeapp 11.png" },
  { src: "/img jukeapp 12.png" },
  { src: "/img jukeapp 13.png" },
];

const buttonData = [
  {
    href: "https://www.figma.com/proto/073b2MgOsbdKPFk5NH4AMn/2023Sept.-JukeApp-v1.?node-id=10370-135840&node-type=frame&viewport=427%2C274%2C0.06&t=wuOaQTMDe0cxxc5J-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10370%3A135840",
    label: "Ruta de colecta App",
  },
  {
    href: "https://www.figma.com/proto/073b2MgOsbdKPFk5NH4AMn/2023Sept.-JukeApp-v1.?node-id=3037-30355&node-type=frame&viewport=333%2C-361%2C0.02&t=wuOaQTMDe0cxxc5J-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3037%3A30355",
    label: "Crear orden",
  },
  {
    href: "https://www.figma.com/proto/073b2MgOsbdKPFk5NH4AMn/2023Sept.-JukeApp-v1.?node-id=1343-6420&node-type=frame&viewport=227%2C242%2C0.02&t=wuOaQTMDe0cxxc5J-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1343%3A6420",
    label: "Crear ruta de colecta",
  },
  {
    href: "https://www.figma.com/proto/073b2MgOsbdKPFk5NH4AMn/2023Sept.-JukeApp-v1.?node-id=3796-27400&node-type=frame&viewport=392%2C236%2C0.06&t=wuOaQTMDe0cxxc5J-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3796%3A27400",
    label: "Zona de entrega",
  },
  {
    href: "https://www.figma.com/proto/073b2MgOsbdKPFk5NH4AMn/2023Sept.-JukeApp-v1.?node-id=7854-9189&node-type=frame&viewport=370%2C321%2C0.1&t=wuOaQTMDe0cxxc5J-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7854%3A9189",
    label: "Mi perfil",
  },
];

const JukeApp = () => {
  return (
    <>
      <article>
        <ImageHero
          backgroundImage="/jukeapp.png"
          LogoComponent={<JukeAppLogo />}
        />
        <JobDescription descriptions={descriptions} details={details} />
        <BodyCaseStudy images={images} />
      </article>
      <Footer className={styles.footer}>
        <h3 className={styles.titleFooter}>Prototipos</h3>
        <ListFooter buttons={buttonData} />
        <LinkWeb
          href={"https://app.jukeapp.co/auth/iniciar_sesion"}
          label={"JukeApp"}
        />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default JukeApp;
