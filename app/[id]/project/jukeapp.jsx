"use client";
import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import JukeAppLogo from "@/components/svg/jukeapp";
import styles from "./globalpages.module.scss";
import ListFooter from "@/components/componentspages/listfooter";
import LinkWeb from "@/components/componentspages/linkweb";
import useCaseStudy from "@/components/hook/useCaseStudy";
import Preload from "@/components/utils/preloadcomponent";
import useDescriptionProject from "@/components/hook/useDescriptionProject";
import usePrototype from "@/components/hook/usePrototype";

const JukeApp = ({ projectId }) => {
  const {
    caseStudy,
    loading: loadingCaseStudy,
    error: errorCaseStudy,
  } = useCaseStudy(projectId);

  const {
    descriptionProject,
    loading: loadingDescription,
    error: errorDescription,
  } = useDescriptionProject(projectId);

  const {
    prototype,
    loading: loadingPrototype,
    error: errorPrototype,
  } = usePrototype(projectId);

  if (loadingCaseStudy || loadingDescription) {
    return <Preload />;
  }

  if (errorCaseStudy || errorDescription) {
    return <div>Error: {errorCaseStudy || errorDescription}</div>;
  }

  const descriptions = [
    descriptionProject.client || "Cliente no disponible",
    descriptionProject.responsability || "Responsabilidad no disponible",
    descriptionProject.tools || "Herramientas no disponibles",
  ];

  const images = caseStudy?.map((study) => ({ src: study.image_url })) || [];
  const buttonData =
    prototype?.map((proto) => ({ href: proto.href, label: proto.label })) || [];

  return (
    <>
      <article>
        <ImageHero
          backgroundImage={
            descriptionProject?.image_url || "/default-image.png"
          }
          LogoComponent={<JukeAppLogo />}
        />
        <JobDescription
          descriptions={descriptions}
          details={descriptionProject?.detail || "Detalles no disponibles"}
        />
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
