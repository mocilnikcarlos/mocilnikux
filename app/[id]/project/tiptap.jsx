"use client";
import Footer from "@/components/footer/footer";
import ImageHero from "@/components/componentspages/imagehero";
import JobDescription from "@/components/componentspages/jobdescription";
import BodyCaseStudy from "@/components/componentspages/bodycasestudy";
import TiptapLogo from "@/components/svg/tiptap";
import styles from "./globalpages.module.scss";
import LinkWeb from "@/components/componentspages/linkweb";
import Preload from "@/components/utils/preloadcomponent";
import ErrorComponent from "@/components/utils/error";
import useCaseStudy from "@/components/hook/useCaseStudy";
import useDescriptionProject from "@/components/hook/useDescriptionProject";

const TipTap = ({ projectId }) => {
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

  if (loadingCaseStudy || loadingDescription) {
    return <Preload />;
  }

  if (errorCaseStudy || errorDescription) {
    return <ErrorComponent />;
  }

  const descriptions = [
    descriptionProject.client || "Cliente no disponible",
    descriptionProject.responsability || "Responsabilidad no disponible",
    descriptionProject.tools || "Herramientas no disponibles",
  ];

  const images = caseStudy?.map((study) => ({ src: study.image_url })) || [];

  return (
    <>
      <article>
        <ImageHero
          backgroundImage={
            descriptionProject?.image_url || "/default-image.png"
          }
          LogoComponent={<TiptapLogo />}
        />
        <JobDescription
          descriptions={descriptions}
          details={descriptionProject?.detail || "Detalles no disponibles"}
        />
        <BodyCaseStudy images={images} />
      </article>
      <Footer className={styles.footer}>
        <LinkWeb href={"https://dev-school.paytiptap.com/"} label={"Tiptap"} />
        <div className={styles.divider}></div>
      </Footer>
    </>
  );
};

export default TipTap;
