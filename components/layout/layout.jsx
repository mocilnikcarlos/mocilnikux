import NavigationPage from "@/components/nav/navigationpage";
import Footer from "@/components/footer/footer";
import style from "./layout.module.scss";

const LayoutPages = ({ children }) => {
  return (
    <div className={style.layout}>
      <NavigationPage />
      <section className={style.sectioncontent}>{children}</section>
    </div>
  );
};

export default LayoutPages;
